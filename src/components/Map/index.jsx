import React, { useEffect, useState } from 'react';
import { Map, Markers, InfoWindow } from 'react-amap';
import { request, useModel } from 'umi';
import { isEmpty } from '@/utils/common';
import apiConfig from '@/config/api';
import styles from './index.less';

const Loading = <div className={styles.loading}>加载地图中...</div>;
const initWindowImgSrc = '/images/map/spot.png';
const center = { longitude: 98.2704, latitude: 39.7836 };
const { amapStyle, amapKey } = apiConfig;
const infoWindowOffset = [38, -38];
const renderMarkerFn = () => {
  return <img alt="" src="/images/map/site.png" />;
};

const WindowContent = ({ windowData }) => {
  const [imgSrc, setImgSrc] = useState(initWindowImgSrc);

  const {
    project_name: name,
    district,
    construction_area,
    construction_license,
    id,
    structure_type,
  } = windowData;

  useEffect(() => {
    (async () => {
      const res = await request('/project/findOneProjectAllFiles', { params: { id } });
      if (res.base64Images) {
        const { base64ImagesOfprojectRenderingAddress: projectDatas } = res.base64Images;
        const projectData = (projectDatas || [])[0];
        if (projectData) {
          setImgSrc(`data:image/png;base64,${projectData}`);
        }
      }
    })();
  }, [id]);

  const details = [
    {
      key: 1,
      title: '施工许可证号',
      value: construction_license,
    },
    {
      key: 2,
      title: '建筑面积',
      value: `${construction_area}m²`,
    },
    {
      key: 3,
      title: '结构形式',
      value: structure_type,
    },
    {
      key: 4,
      title: '工程进度',
      value: (
        <div className={styles.progressBar}>
          <div className={styles.progress} />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={styles.popup}>
        <div className={styles.first}>
          <div className={styles.name}>{name}</div>
          <div>
            <a
              className={styles.link}
              rel="noopener noreferrer"
              target="_blank"
              href={`/project?id=${id}`}
            >
              详情 &gt;
            </a>
          </div>
        </div>
        <div className={styles.second}>
          <div className={`iconfont iconMonitor ${styles.icon}`} />
          <div className={styles.location}>{district}</div>
        </div>
        <div className={styles.third}>
          <img className={styles.img} alt="" src={imgSrc} />
          <div className={styles.detail}>
            {details.map((item) => (
              <div key={item.key} className={styles.item}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.value}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.arrow} />
    </>
  );
};

const Index = (props) => {
  const [state, setState] = useState({
    windowPosition: null,
    windowData: null,
  });

  const { windowPosition, windowData } = state;
  const { mapMarkers: markers, siteDatas } = props;

  const closeInfo = () => {
    setState((prevState) => ({
      ...prevState,
      windowPosition: null,
    }));
  };
  const showInfo = (extData) => {
    const {
      position: { longitude, latitude },
      id,
    } = extData;

    const { longitude: lng, latitude: lat } = windowPosition || {};
    if (longitude === lng && latitude === lat) return;
    setState({
      windowPosition: {
        longitude,
        latitude,
      },
      windowData: siteDatas[id],
    });
  };

  const markersEvents = {
    click: (_, marker) => {
      const extData = marker.getExtData();
      showInfo(extData);
    },
  };

  const windowEvents = {
    close: closeInfo,
  };

  const infoWindowVis = !isEmpty(windowPosition);

  return (
    <div className={styles.map}>
      <Map
        viewMode="3D"
        mapStyle={amapStyle}
        amapkey={amapKey}
        zoom={14}
        pitch={52}
        center={center}
        showBuildingBlock
        buildingAnimation={false}
        rotation={80}
        loading={Loading}
      >
        <Markers
          render={renderMarkerFn}
          markers={markers}
          events={markersEvents}
          // useCluster
        />
        <InfoWindow
          isCustom
          closeWhenClickMap
          events={windowEvents}
          position={windowPosition}
          visible={infoWindowVis}
          offset={infoWindowOffset}
        >
          {infoWindowVis && <WindowContent key={windowData.id} windowData={windowData} />}
        </InfoWindow>
      </Map>
    </div>
  );
};

const Container = () => {
  const { initialState = {} } = useModel('@@initialState');
  const { mapMarkers = [], siteDatas = {} } = initialState;

  return <Index mapMarkers={mapMarkers} siteDatas={siteDatas} />;
};

export default Container;

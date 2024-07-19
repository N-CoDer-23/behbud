// src/kirish/Loading.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/next-page');
    }, 20000 ); // 20 soniya

    return () => clearTimeout(timer); // Tozalash funksiyasi
  }, [navigate]);

  return (
    <div className='loading-container'>
    <Flex align="center" gap="middle" className='loading'>
    <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </Flex>
    <h2 className='Text1'>Hamster Kombat Token</h2>
    <div className='HamsterLink'>
    <div className='Tarmoq'></div>
    <div className='Tarmoq'></div>
    <div className='Tarmoq'></div>
    </div>
    </div>
  );
};

export default Loading;

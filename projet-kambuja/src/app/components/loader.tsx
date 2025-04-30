'use client'
import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader flex flex-col items-center pt-10">
        <svg className="container" x="0px" y="0px" viewBox="0 0 50 50" height={50} width={50} preserveAspectRatio="xMidYMid meet">
          <path className="track" fill="none" stroke="#553920" strokeWidth={4} pathLength={100} d={PATH_DATA} />
          <path className="car" fill="none" stroke="#553920" strokeWidth={4} pathLength={100} d={PATH_DATA} />
        </svg>
        <p className="text-lg animate-pulse">Le royaume attend vos ordres…</p>
      </div>
    </StyledWrapper>
  );
}
const PATH_DATA = "M29.760000000000005 18.72 c0 7.28 -3.9200000000000004 13.600000000000001 -9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.840000000000002 2.64 c -3.6 0 -6.88 -0.96 -9.76 -2.64 c0 -7.28 3.9200000000000004 -13.52 9.840000000000002 -16.96 c2.8800000000000003 -1.6800000000000002 6.24 -2.64 9.76 -2.64 S26.880000000000003 17.040000000000003 29.760000000000005 18.72 c5.84 3.3600000000000003 9.76 9.68 9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.76 2.64 c -3.6 0 -6.88 -0.96 -9.840000000000002 -2.64 c -5.84 -3.3600000000000003 -9.76 -9.68 -9.76 -16.96 c0 -7.28 3.9200000000000004 -13.600000000000001 9.76 -16.96 C25.84 5.120000000000001 29.760000000000005 11.440000000000001 29.760000000000005 18.72z";


const StyledWrapper = styled.div`
  .container {
    --uib-size: 100px;
    --uib-speed: 2.5s;
    --uib-bg-opacity: 0.2;
    height: var(--uib-size);
    width: var(--uib-size);
    transform-origin: center;
    overflow: visible;
  }

  .car {
    fill: none;
    stroke-dasharray: 15, 85;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: travel var(--uib-speed) linear infinite;
    will-change: stroke-dasharray, stroke-dashoffset;
    transition: stroke 1s ease;
  }

  .track {
    opacity: var(--uib-bg-opacity);
    transition: stroke 1s ease;
  }

  @keyframes travel {
    0% {
      stroke-dashoffset: 0;
    }

    100% {
      stroke-dashoffset: -100;
    }
  }`;

export default Loader;
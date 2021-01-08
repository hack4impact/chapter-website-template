import React from 'react';
import BackgroundSlider from '../backgroundSlider';
import { Row } from 'reactstrap';
import Link from 'next/link';

const clients = [
  {
    name: 'CommunityConnect Labs',
    width: 218,
    height: 48,
    logoPath: '/images/client_logos/ccllogo.svg',
    link: '/projects/ccl',
  },
  {
    name: 'Life After Hate',
    width: 227,
    height: 31,
    logoPath: '/images/client_logos/lahlogo.png',
    link: '/projects/lah',
  },
  {
    name: 'YMCA NAWC',
    width: 147,
    height: 116,
    logoPath: '/images/client_logos/ymcalogo.png',
    link: '/projects/ymca',
  },
  {
    name: 'Kids Save Ocean',
    width: 128,
    height: 123,
    logoPath: '/images/client_logos/ksologo.png',
    link: '/projects/kso',
  },
  {
    name: 'GLEN World',
    width: 125,
    height: 125,
    logoPath: '/images/client_logos/glwlogo.png',
    link: '/projects/glenworld',
  },
  {
    name: 'SaverLife',
    width: 224,
    height: 50,
    logoPath: '/images/client_logos/saverlifelogo.svg',
    link: '/projects/saverlife',
  },
  {
    name: 'Love Without Boundaries',
    width: 250,
    height: 55,
    logoPath: '/images/client_logos/lwblogo.svg',
    link: '/projects/lwb',
  },
  {
    name: 'Child&#39;s Play',
    width: 140,
    height: 135,
    logoPath: '/images/client_logos/cplogogreen.png',
    link: '/projects/cp',
  },
  {
    name: 'Kiva-1',
    width: 160,
    height: 55,
    logoPath: '/images/client_logos/kivalogo.png',
    link: '/projects/kiva-1',
  },

  {
    name: 'Philadelphia Reads',
    width: 135,
    height: 120,
    logoPath: '/images/client_logos/philareadslogo.png',
    link: '/projects/pr',
  },
  {
    name: 'C2TC',
    width: 130,
    height: 130,
    logoPath: '/images/client_logos/c2tclogo.png',
    link: '/projects/safemaps',
  },
  {
    name: 'Global Giving',
    width: 250,
    height: 40,
    logoPath: '/images/client_logos/gglogo.png',
    link: '/projects/gg-2',
  },
  {
    name: 'Kiva-2',
    width: 160,
    height: 55,
    logoPath: '/images/client_logos/kivalogo.png',
    link: '/projects/kiva-2',
  },
  {
    name: 'Neighborhood News Bureau',
    width: 250,
    height: 50,
    logoPath: '/images/client_logos/nnblogo.png',
    link: '/projects/nnb-1',
  },
  {
    name: 'Product Infrastructure',
    width: 150,
    height: 100,
    logoPath: '/images/values/value-1.svg',
    link: '/projects/pi',
  },
  {
    name: 'UIC MLI',
    width: 120,
    height: 120,
    logoPath: '/images/client_logos/mlilogo.svg',
    link: '/projects/mli',
  },
];
export default function ClientSider() {
  return (
    <Row>
      <div className="showcase-container">
        <BackgroundSlider duration={40}>
          <div className="client-logo-container">
            {clients.map((client) => (
              <div key={client.name}>
                <Link href={client.link}>
                  <a>
                    <img
                      width={client.width}
                      height={client.height}
                      src={client.logoPath}
                      alt={`${client.name} logo`}
                    />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </BackgroundSlider>
      </div>
      <style jsx>{`
        .showcase-container {
          margin-bottom: 40px;
          overflow: hidden;
          width: 100%;
        }
        .client-logo-container {
          white-space: nowrap;
          overflow: hidden;
        }
        .client-logo-container > div {
          display: inline-block;
          padding: 0 50px;
          vertical-align: middle;
          opacity: 0.25;
          outline: none;
          cursor: default;
          transition: opacity 0.2s ease;
        }
        .client-logo-container > div:hover {
          opacity: 0.8;
        }
      `}</style>
    </Row>
  );
}

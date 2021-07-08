import React, { useEffect, useRef, useState } from 'react';
import Rellax from 'rellax';

import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';

interface Props {
  match: any;
  history: any;
}

const Home = (props: Props) => {
  useEffect(() => {
    new Rellax('.rellax', {
      speed: 5,
      center: true,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <div className="home">
      <div className="home__section home__section-1">
        <div className="home__section__content rellax">
          <h1>Voluptatem exercitationem perferendis</h1>
          <p>
            Voluptate et magnam rem excepturi corrupti ut doloribus error illo.
            Repellat possimus possimus dignissimos ea eius cumque soluta impedit
            error similique. Nulla molestias nostrum illum officia aliquam ullam
            illum sequi maxime repellat dolore corporis. Corrupti cum commodi
            cupiditate nihil possimus illum eaque nulla ut fugit explicabo
            delectus assumenda iste pariatur. Perspiciatis rerum dolor deserunt
            officia voluptas assumenda accusamus cumque corporis tenetur nemo
            consequuntur. Doloribus ipsa modi rem alias vitae rerum beatae
            veniam inventore voluptatibus vitae nostrum. Assumenda blanditiis
            saepe aspernatur autem facilis quaerat laborum error perferendis
            sint voluptates quis eaque deleniti quod temporibus delectus
          </p>
        </div>
      </div>
      <div className="home__section home__section-2">
        <div className="home__section__content">
          <h1>Aut dolorum architecto debitis in alias</h1>
          <p>
            Amet expedita maiores qui eius est error recusandae id officiis
            culpa officia distinctio. Aspernatur assumenda magnam perferendis
            non doloribus quia autem sequi suscipit rerum laudantium aliquid
            sed. Rerum magni tempore possimus deleniti odit voluptatem in quod a
            ducimus recusandae dolore. Corrupti rem architecto odit similique
            iusto necessitatibus ex eligendi harum quibusdam exercitationem
            voluptas harum similique saepe molestias. Sequi illum quisquam
            quaerat explicabo exercitationem consectetur in vero ex beatae sunt
            occaecati veritatis dolore nobis maiores itaque
          </p>
        </div>
      </div>
      <div className="home__section home__section-2">
        <div className="home__section__content">
          <h1>Aut dolorum architecto debitis in alias</h1>
          <p>
            Amet expedita maiores qui eius est error recusandae id officiis
            culpa officia distinctio. Aspernatur assumenda magnam perferendis
            non doloribus quia autem sequi suscipit rerum laudantium aliquid
            sed. Rerum magni tempore possimus deleniti odit voluptatem in quod a
            ducimus recusandae dolore. Corrupti rem architecto odit similique
            iusto necessitatibus ex eligendi harum quibusdam exercitationem
            voluptas harum similique saepe molestias. Sequi illum quisquam
            quaerat explicabo exercitationem consectetur in vero ex beatae sunt
            occaecati veritatis dolore nobis maiores itaque
          </p>
        </div>
      </div>
      <div className="home__section home__section-2">
        <div className="home__section__content">
          <h1>Aut dolorum architecto debitis in alias</h1>
          <p>
            Amet expedita maiores qui eius est error recusandae id officiis
            culpa officia distinctio. Aspernatur assumenda magnam perferendis
            non doloribus quia autem sequi suscipit rerum laudantium aliquid
            sed. Rerum magni tempore possimus deleniti odit voluptatem in quod a
            ducimus recusandae dolore. Corrupti rem architecto odit similique
            iusto necessitatibus ex eligendi harum quibusdam exercitationem
            voluptas harum similique saepe molestias. Sequi illum quisquam
            quaerat explicabo exercitationem consectetur in vero ex beatae sunt
            occaecati veritatis dolore nobis maiores itaque
          </p>
        </div>
      </div>
      <div className="home__section home__section-3">
        <div className="home__section__content rellax">
          <h1>Aliquam commodi perspiciatis</h1>
          <p>
            Quidem consectetur expedita sit in adipisci minus nemo mollitia
            libero deserunt ullam. Exercitationem rerum molestiae illo
            consequuntur commodi quo itaque culpa id molestiae dolore vel sit
            eaque. Cum quia occaecati odit vitae ducimus aut sit quod
            praesentium quasi itaque corrupti maiores. Vel laborum maxime cum
            ducimus repudiandae facere ratione deleniti a at dolor. Non eligendi
            ea similique odio sequi consectetur at velit quaerat nesciunt
            nesciunt rerum quas aut maxime fugit totam. Maxime harum aliquid
            velit non laudantium sapiente aut provident saepe magnam dolorem non
            doloribus impedit rem voluptatem
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

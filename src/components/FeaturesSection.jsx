import React from 'react';
import { createFeatures } from '../data/features';
import MediaCarousel from './MediaCarousel';

const FeaturesSection = () => {
  const features = createFeatures(React);

  return (
    <section className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Recursos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tudo o que precisas para uma experiência única
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Descobre um mundo onde cada detalhe foi pensado para te dar a experiência mais realista e imersiva possível.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {feature.icon}
                  {feature.title}
                </dt>
                <dd className="flex flex-col flex-auto mt-4">
                  <p className="flex-auto text-base leading-7 text-gray-600">{feature.description}</p>
                  <p className="mt-6">
                    <MediaCarousel media={feature.media} />
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 
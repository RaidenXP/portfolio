'use client';

import { projectRay, rayPrim, rayCSG, raylight, rayRR, rayText } from "@/constants";

import Carousel from "@/components/Carousel"
import RightPageNav from "@/components/RightPageNav";
import Linkable from "@/components/Linkable";

import { useInView } from "react-intersection-observer";

const RayTracingPage = () => {
  const {ref: primRef, inView: primView, entry: primEntry} = useInView({
    threshold: 0.53
  });
  const {ref: csgRef, inView: csgView, entry: csgEntry} = useInView({
    threshold: 0.47
  });
  const {ref: lightRef, inView: lightView, entry: lightEntry} = useInView({
    threshold: 0.48
  });
  const {ref: rrRef, inView: rrView, entry: rrEntry} = useInView({
    threshold: 0.25
  });
  const {ref: textureRef, inView: textureView, entry: textureEntry} = useInView({
    threshold: 0.37
  });

  projectRay[0].inView = primView
  projectRay[1].inView = csgView
  projectRay[2].inView = lightView
  projectRay[3].inView = rrView
  projectRay[4].inView = textureView

  return (
    <>
      <article className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
      min-h-[calc(100vh-103px)] block' 
      >
        <h1 className='break-words text-4xl font-semibold mb-8'>
          Raytracing Series
        </h1>
        <p className='text-base my-5'>
          The Raytracing project was done during my time at Cal Poly Pomona. The professor provided a
          framework to work on, but most of the functions were empty. I worked with one other person.
          Many of the features were extra credit, and my partner and I went for almost all of them. I believe
          that we were only missing one feature. Fixing the camera position and shape size, were extra credit
          options that may not be present with the images below, but my partner implemented these and it
          helped with some images.
        </p>
        <p className="mb-5">
          For this section of the project box, I will not deeply cover the technical subjects. There is
          a lot of code, and most of it was following a formula. Once we understood how the rays shot, we
          easily translated that information into code.
        </p>
        <div ref={primRef}>
          <h2 id="prim" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
          text-2xl scroll-mt-[75px]'>
            Primitives
          </h2>
          <p className="mb-5">
            For the first step of this project, we needed to make three shapes. Spheres,
            planes, and triangles. The first four images in the carousel shows them. The rest,
            such as cylinders and cones, are extra credit. The main pattern to display the images
            was to calculate where the ray first hits the object and when it exits.
          </p>
          <div className="mb-5">
            <Carousel items={rayPrim}/>
          </div>
        </div>
        <div ref={csgRef}>
          <h2 id="CSG" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
          text-2xl scroll-mt-[75px]'>
            Constructive Solid Geometry
          </h2>
          <p className="mb-5">
            After we finished creating our shapes, we worked on Constructive Solid Geometry, or
            CSG. This is when we take two shapes and perform a union, intersection, difference, or
            a combination of the choices. If we calculated when the ray enters and exits correctly,
            knowing when the ray is in which shape was next. The reason why we would want to
            know where the ray is, is to show whether we include that pixel or not.
          </p>
          <p className="my-5">
            This part of the project was pretty difficult. We ran into some problem during this part and
            after. When we were working on other parts we came back and realized that we had some parts
            incorrect. Therefore, we had to fix our earlier implementation. Overall, we can make some
            cool shapes with CSG.
          </p>
          <div className="mb-5">
            <Carousel items={rayCSG}/>
          </div>
        </div>
        <div ref={lightRef}>
          <h2 id="light" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
          text-2xl scroll-mt-[75px]'>
            Lighting
          </h2>
          <p className="mb-5">
            Lighting is probably my favorite part of this project. It made many of the images look better and
            realistic. The addition of light created depth as well. Lighting, Reflections, and Refraction
            was actually one part all together, but I separated them. I still really enjoyed implementing all
            three with my partner. They did the lighting, and I did the reflections and refraction.
          </p>
          <p className="my-5">
            The main model used for this part of the project was the Phong Reflection Model or Phong Lighting.
            There are some interesting images here that I wanted to point out. Image six with the shpere of
            multi colors is actually a surface behind three spheres. There are three light sources shining
            down and the colors are the shadows. Image 10 with the sphere that has holes in it actually has
            a light source inside it. That is why it may look bright inside the green area.
          </p>
          <div className="mb-5">
            <Carousel items={raylight}/>
          </div>
        </div>
        <div ref={rrRef}>
          <h2 id="rr" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
          text-2xl scroll-mt-[75px]'>
            Reflections and Refractions
          </h2>
          <p className="mb-5">
            This part of the project was mainly me implementing it because my partner already did the lighting
            implementation. We had a lot of problems with the reflections. It was not matching our professor's
            results. I had a feeling that ours looked pretty realistic, and it turned out that ours was
            completely fine. That was very relieving. Next is the refraction. This portion was actually extra
            credit. We also had a problem with our professor's results. In the last two images, you can see
            that the lense actually changes the color of the shape and is not completely see through. Our
            professor's result was clear. Fortunately, our result turned out to be fine. We talked to
            our professor a lot to figure out our differences, and it turned out that our implmentation
            was good and preferred.
          </p>
          <div className="my-5">
            <Carousel items={rayRR}/>
          </div>
          <p className="my-5">
            The next figures are videos created by many frames. It shows our refraction at work.
          </p>
          <figure className='my-5 flex justify-evenly items-center content-center'>
            <video 
              preload="auto" 
              width={600} 
              height={600} 
              autoPlay 
              loop 
              controls 
              muted
              src="/raytracer/rr/animation1.mp4"
            />
          </figure>
          <figure className='mb-5 flex justify-evenly items-center content-center'>
            <video 
              preload="auto" 
              width={600} 
              height={600} 
              autoPlay 
              loop 
              controls 
              muted
              src="/raytracer/rr/animation2.mp4"
            />
          </figure>
        </div>
        <div ref={textureRef}>
          <h2 id="texture" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
          text-2xl scroll-mt-[75px]'>
            Textures
          </h2>
          <p className="mb-5">
            The final part was adding textures to our images. This part became tricky
            because of our CSG. As I mentioned earlier, we had to come back to our CSG
            so that some of the images here would work. Image five with Earth and it's
            reflections was bugged in our end. However, we found a way to get it to work.
            Image four of the chair is probably my favorite one. It is actually made up
            of a bunch of triangles. In addition, it took a while to render.
          </p>
          <div className="my-5">
            <Carousel items={rayText}/>
          </div>
          <p className="my-5">
            One of our final animations displaying refraction and textures.
          </p>
          <figure className='mb-5 flex justify-evenly items-center content-center'>
            <video 
              preload="auto" 
              width={600} 
              height={600} 
              autoPlay 
              loop 
              controls 
              muted
              src="/raytracer/texture/final_ani_2.mp4"
            />
          </figure>
        </div>
      </article>
      <RightPageNav items={projectRay}/>
    </>
  )
}

export default RayTracingPage
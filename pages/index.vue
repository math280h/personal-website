<template>
  <div class="bg-gray-900">
    <div class="w-full mx-auto sm:px-6 h-hero flex justify-center align-middle">
      <div class="text-left w-full max-w-6xl flex justify-center flex-col">
        <h1 class="text-4xl tracking-tight font-extrabold text-white font-semibold font-main">
          Hi, I'm Thias. <br/> <span class="text-gray-400">I scale the unscalable.</span>
        </h1>
        <p class="mt-8 text-lg font-main text-gray-300 sm:mt-8">
          I'm a Sr. DevOps Engineer who likes to work towards <br/> solving the problem of scalability, security and maintainability. <br> I also like to take pictures, some of my personal favorites you will find on here
        </p>
        <div
          class="mt-12"
        >
          <a
            class="text-gray-300 border-red-400 border py-3 px-10 rounded-md font-main"
            href="https://github.com/math280h"
            target="_blank"
          >
            Find me on GitHub
          </a>
        </div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto" id="projects">
      <div class="border-red-400 border-b w-full pb-2">
        <h2 class="font-main text-gray-200 text-2xl">Projects</h2>
      </div>
      <div>
        <div class="mt-12 mx-auto grid gap-5 lg:grid-cols-3">
          <Project title="redactdump" license="open-source" link="https://github.com/math280h/redactdump" description="Easily create database dumps with support for redacting data" />
          <Project title="loghandler" license="open-source" link="https://github.com/math280h/loghandler" description="Logging module for python that supports sending logs to multiple endpoints at once" />
          <Project title="Hushbot" license="open-source" link="https://github.com/math280h/hushbot" description="Text Moderation bot for Discord." />
          <Project title="freeipa-docker" license="open-source" link="https://github.com/math280h/freeipa-docker" description="Simple script to create and delete freeipa-server inside docker." />
          <Project title="quick-serve" license="open-source" link="https://github.com/math280h/quick-serve" description="A very simple and limited HTTP Server" />
          <Project title="batfu" license="open-source" link="https://github.com/math280h/batfu" description="Simple .bat obfuscator without any external packages." />
          <Project title="PyFileMovr" license="open-source" link="https://github.com/math280h/PyFileMovr" description="Quickly move files from a folder and subfolders to a single target" />
          <Project title="SodukoSolver" license="open-source" link="https://github.com/math280h/SodukoSolver" description="Solves Soduko's and displays the answer via PyGame" />
        </div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto pt-28" id="gallery">
      <div class="border-red-400 border-b w-full pb-2">
        <h2 class="font-main text-gray-200 text-2xl">Gallery <span class="text-sm">(Feel free to use my images*, click the images to view the source)</span></h2>
        <p class="text-sm text-gray-400">*All images uploaded are uploaded under the MIT License</p>
      </div>
      <div class="pb-20">
        <div class="mt-12">
          <h3 class="font-main text-red-400">Norway</h3>
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <Image link="images/norway/20211219_153930.jpg"/>
            <Image link="images/norway/20211220_095015.jpg"/>
            <Image link="images/norway/20211223_123329.jpg"/>
            <Image link="images/norway/20211223_125841.jpg"/>
            <Image link="images/norway/20211226_091534.jpg"/>
          </div>
        </div>
        <div class="mt-12">
          <h3 class="font-main text-red-400">Denmark</h3>
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <Image link="images/20211008_192413.jpg"/>
            <Image link="images/IMG_20190801_070910.jpg"/>
            <Image link="images/IMG_20191201_161906.jpg"/>
            <Image link="images/IMG_20200803_213157.jpg"/>
            <Image link="images/IMG_20200803_213211.jpg"/>
            <Image link="images/IMG_20210501_192611.jpg"/>
            <Image link="images/IMG_20210513_193206.jpg"/>
            <Image link="images/IMG_20210815_094702.jpg"/>
            <Image link="images/IMG_20210815_122328.jpg"/>
            <Image link="images/IMG_20210816_111512.jpg"/>
            <Image link="images/IMG_20210816_113313.jpg"/>
          </div>
        </div>
        <div class="mt-12">
          <h3 class="font-main text-red-400">France</h3>
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <Image link="images/IMG_20210623_160706.jpg"/>
            <Image link="images/IMG_20210627_085541.jpg"/>
            <Image link="images/IMG_20210701_141954.jpg"/>
          </div>
        </div>
        <div class="mt-12">
          <h3 class="font-main text-red-400">Canada</h3>
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <Image link="images/IMG_20171110_115401.jpg"/>
          </div>
        </div>
        <div class="mt-12">
          <h3 class="font-main text-red-400">Somewhere in the air</h3>
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <Image link="images/20211016_171125.jpg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="min-h-body">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Projects
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              A list of my projects, some open-source, some closed-source
            </p>
          </div>
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
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
    </div>
  </div>
</template>

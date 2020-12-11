<template>
  <div class="home-container">
    <div class="video">
      <video loop autoplay="true" muted style="width= 100%; height=100%; object-fit: fill">
        <source src="../static/first.mp4" type="video/mp4">
      </video>
    </div>
    <div class="banner"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  .video {
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      transform: translate(-50%, -50%);
    }
  }
  .banner {
    width: 100%;
    height: 100vh;
  }
}
</style>

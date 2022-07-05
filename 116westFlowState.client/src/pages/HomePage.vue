<template>
  <div class="container-fluid">
    <div class="row parallax d-flex justify-content-center">
      <div class="m-1"></div>
      <div class="col-lg-5 col-md-8 col-sm-10 text-center text-dark">
        <h1 class="bg-light p-3 text-center shadow rounded-pill">
          <div class="mt-2">
            Welcome to FlowState
            <h4>A Place for productivity</h4>
          </div>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
.parallax {
  /* The image used */
  background-image: url("../assets/img/3173341.jpg");

  /* Set a specific height */
  min-height: 85vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

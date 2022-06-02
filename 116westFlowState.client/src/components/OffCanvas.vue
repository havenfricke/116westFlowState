<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasWithBackdrop"
    aria-labelledby="offcanvasWithBackdropLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">
        <slot name="header"><!-- Header OffCanvas slot --></slot>
      </h5>
      <!-- <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> -->
    </div>
    <div class="offcanvas-body">
      <slot name="body"><!-- Footer OffCanvas slot --></slot>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style></style>

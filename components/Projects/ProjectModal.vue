<template>
  <div>
    <div class="modal-wrapper show-prompt">
      <div class="modal-content">
        <ContentDoc id="modal-doc" :path="docPath"/>
      </div>
      <div class="modal-background" @click="close"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ProjectModal",
  props: [
    'close','docPath'
  ]

}
</script>

<style scoped lang="scss">
.modal-wrapper {
  width: 100%;
  background: rgba(4, 15, 20, 0.85);
  height: 90vh;
  left: 0;
  top: 0;
  z-index: 9999;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}

.modal-background {
  position: absolute;
  width: 100%;
  z-index: 1;
  height: 100%;
  cursor: pointer;
}

.modal-content {
  background: #000000;
  border-radius: 12px;
  padding: 10px;
  z-index: 100;
  width: 80em;
  overflow: auto;
}

.modal-content-header {
  display: flex;
  justify-content: space-between;
}

.modal-content-header-title {
  font-weight: bold;
}

.modal-content-header-close {
  cursor: pointer;
}

.modal-content-items ul {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 30px;

  li {
    background: #EAEFFC;
    box-shadow: 0px 8px 35px rgba(200, 205, 218, 0.15);
    border-radius: 6px;
    margin-bottom: 15px;

    .item-content {
      padding: 25px;
      display: flex;
      justify-content: space-between;
    }

    .item-title {
      color: #A0AAC4;
    }
  }
}

.modal-content {
  .modal-confirm {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    ul {
      width: 65%;
      margin-top: 10px;
    }

    p {
      width: 50%;
      margin-top: 10px;
      color: #8990A4;
      font-size: 12px;
    }

    .donate-form-checkbox p {
      width: 230px;
      text-align: left;
      line-height: 14px;
    }

    .donate-form-btn {
      width: 100%;
    }
  }

  .modal-login {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .donate-form-btn {
      margin-top: 15px;
      margin-bottom: 40px;

      svg {
        padding-left: 7px;
      }
    }
  }
}

@media screen and (max-width: 560px) {
  .modal-content-login{
    width: 100%;
    height: 100vh;
    border-radius: 0px;
    border-color: white;
  }
}

@media screen and (max-width: 343px) {
  .modal-content-header{
    justify-content: flex-end;
  }

  .modal-content-header-title{
    display: none;
  }
}


</style>

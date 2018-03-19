<template>
  <div class="wrap">
    <div class="code-area">
      <span style="color: #777 ;font-style:italic;">
        // {{ error.statusCode }} {{ error.message }}.
      </span>
      <span>
        <span style="color:#d65562;">
          if
        </span>
        (<span style="color:#4ca8ef;">!</span><span style="font-style: italic;color:#bdbdbd;">found</span>)
        {
      </span>
      <span>
        <span style="padding-left: 15px;color:#2796ec">
          <i style="width: 10px;display:inline-block"></i>throw
        </span>
        <span>
          (<span style="color: #a6a61f">"(╯°□°)╯︵ ┻━┻"</span>);
        </span>
        <span style="display:block">}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  cursor: default;

  background: #081421;

  line-height: 1.5em;

  font-family: "Courier new";
  color: #d3d7de;
  font-size: 18px;
}

.code-area {
  width: 320px;
  min-width: 320px;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  background: #081421;
}

.code-area > span {
  display: block;
}

@media screen and (max-width: 320px) {
  .code-area {
    width: 95%;
    min-width: auto;
		margin: auto;
		padding: 5px;
		padding-left: 10px;

		line-height: 6.5vw;

    font-size: 5vw;
  }
}
</style>

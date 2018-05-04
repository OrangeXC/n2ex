<script>
export default {
  fetch ({ params, redirect }) {
    redirect(301, `/node/${params.name}`)
  }
}
</script>

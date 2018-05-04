<script>
export default {
  fetch ({ params, redirect }) {
    redirect(301, `/m/node/${params.name}`)
  }
}
</script>

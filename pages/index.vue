<template>
  <div class="example">
    <template v-if="isReady">
      <Codemirror
        class="codemirror"
        v-model:value="code"
        :options="cmOptions"
      />
    </template>
  </div>
</template>

<script>
export default {
  setup() {
    const isReady = ref(false);
    onMounted(() => {
      isReady.value = true;
    });

    const code = ref(`function sum(a, b) {
  return a + b;
}`);

    return {
      code,
      cmOptions: {
        mode: 'text/javascript', // Language mode
        theme: 'dracula', // Theme
        lineNumbers: true, // Show line number
        smartIndent: true, // Smart indent
        indentUnit: 2, // The smart indent unit is 2 spaces in length
        foldGutter: true, // Code folding
        styleActiveLine: true, // Display the style of the selected row
      },
      isReady
    };
  }
}
</script>

<style scoped>
</style>
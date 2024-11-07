// Ensure the Builder SDK is loaded
import { Builder } from '@builder.io/sdk-vue';
import { h, defineComponent } from 'vue';
import { Editor } from '@tinymce/tinymce-vue';

// Define the TinyMCE editor component
const TinyMCEEditor = defineComponent({
  props: ['value', 'onChange'],
  setup(props) {
    return () =>
      h(Editor, {
        apiKey: 'we7t9nu925h3lih6jegganf5orsnvhyczrx35b3az8hoberc',
        init: {
          height: 500,
          menubar: false,
          plugins: 'link image code',
          toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | code'
        },
        modelValue: props.value,
        'onUpdate:modelValue': props.onChange
      });
  }
});

// Register the custom editor with Builder.io
Builder.registerEditor({
  name: 'TinyMCEEditor',
  component: TinyMCEEditor,
  // Define the input type for the field
  inputs: [
    {
      name: 'content',
      type: 'html',
      defaultValue: '<p>Start writing...</p>'
    }
  ]
});
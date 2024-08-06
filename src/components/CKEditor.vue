<template>
    <div height="100px" style="overflow-y: auto !important;">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';
import { MyCustomUploadAdapterPlugin } from '@/plugins/my-upload-adapter';

ClassicEditor.builtinPlugins.push(MyCustomUploadAdapterPlugin);

export default {
    name: 'CKEditorComponent',
    components: {
        ckeditor: CKEditor.component
    },
    props: {
        modelValue: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            editor: ClassicEditor,
            editorData: this.modelValue,
            editorConfig: {
                toolbar: [
                    'heading', '|',
                    'bold', 'italic', 'link',
                    'bulletedList', 'numberedList', 'blockQuote',
                    'imageUpload', '|',
                    'undo', 'redo', '|'
                ],

            }
        };
    },
    watch: {
        modelValue(newVal) {
            this.editorData = newVal;
        },
        editorData(newVal) {
            this.$emit('update:modelValue', newVal);
        }
    }
};


</script>

<style>
.ckeditor-container {
    height: 500px;
    overflow-y: auto !important;
    border: 1px solid #ccc;
}

.ck-editor__editable {
    height: 500px;
    overflow-y: auto;
}
</style>

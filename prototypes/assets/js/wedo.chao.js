$(function() {
  tinymce.init({
    selector: 'textarea.mce-editor',
    theme: "silver",
    height: 300,
    menubar: false,
    branding: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'bold italic backcolor | bullist numlist outdent indent | link unlink | undo redo | alignleft aligncenter alignright alignjustify',
    
  });

  $('.select-wrapper select').select2();

  $('#account-datepicker').datepicker();

});
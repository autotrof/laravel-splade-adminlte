<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Google Font: Source Sans Pro -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="{{ secure_url('') }}/plugins/fontawesome-free/css/all.min.css">
        <!-- Ionicons -->
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Tempusdominus Bootstrap 4 -->
        {{-- <link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"> --}}
        <!-- iCheck -->
        <link rel="stylesheet" href="{{ secure_url('') }}/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
        <!-- JQVMap -->
        {{-- <link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css"> --}}
        <!-- Theme style -->
        <link rel="stylesheet" href="{{ secure_url('') }}/dist/css/adminlte.min.css">
        <!-- overlayScrollbars -->
        <link rel="stylesheet" href="{{ secure_url('') }}/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
        <!-- Daterange picker -->
        <link rel="stylesheet" href="{{ secure_url('') }}/plugins/daterangepicker/daterangepicker.css">
        <!-- summernote -->
        {{-- <link rel="stylesheet" href="plugins/summernote/summernote-bs4.min.css"> --}}
        @spladeHead
        @vite('resources/js/app.js')
    </head>
    <body class="hold-transition sidebar-mini layout-fixed">
        @splade
        <script src="{{ secure_url('') }}/plugins/jquery/jquery.min.js"></script>
        <!-- jQuery UI 1.11.4 -->
        <script src="{{ secure_url('') }}/plugins/jquery-ui/jquery-ui.min.js"></script>
        <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
        <script>
        $.widget.bridge('uibutton', $.ui.button)
        </script>
        <!-- Bootstrap 4 -->
        <script src="{{ secure_url('') }}/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <!-- ChartJS -->
        <script src="{{ secure_url('') }}/plugins/chart.js/Chart.min.js"></script>
        <!-- Sparkline -->
        {{-- <script src="plugins/sparklines/sparkline.js"></script> --}}
        <!-- JQVMap -->
        {{-- <script src="plugins/jqvmap/jquery.vmap.min.js"></script> --}}
        {{-- <script src="plugins/jqvmap/maps/jquery.vmap.usa.js"></script> --}}
        <!-- jQuery Knob Chart -->
        {{-- <script src="plugins/jquery-knob/jquery.knob.min.js"></script> --}}
        <!-- daterangepicker -->
        <script src="{{ secure_url('') }}/plugins/moment/moment.min.js"></script>
        <script src="{{ secure_url('') }}/plugins/daterangepicker/daterangepicker.js"></script>
        <!-- Tempusdominus Bootstrap 4 -->
        {{-- <script src="plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script> --}}
        <!-- Summernote -->
        {{-- <script src="plugins/summernote/summernote-bs4.min.js"></script> --}}
        <!-- overlayScrollbars -->
        <script src="{{ secure_url('') }}/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
        <!-- AdminLTE App -->
        <script src="{{ secure_url('') }}/dist/js/adminlte.js"></script>
        <!-- AdminLTE for demo purposes -->
        {{-- <script src="dist/js/demo.js"></script> --}}
        <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
        {{-- <script src="dist/js/pages/dashboard.js"></script> --}}
    </body>
</html>

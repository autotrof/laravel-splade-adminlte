<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @spladeHead
        @vite('resources/js/app.js')
    </head>
    <body class="hold-transition sidebar-mini layout-fixed">
        @splade


        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

        <script src="{{ secure_url('') }}/plugins/jquery/jquery.min.js"></script>
        <!-- jQuery UI 1.11.4 -->
        <script src="{{ secure_url('') }}/plugins/jquery-ui/jquery-ui.min.js"></script>
        <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
        <script>
        $.widget.bridge('uibutton', $.ui.button)
        </script>
        <!-- Bootstrap 4 -->
        <script src="{{ secure_url('') }}/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <!-- daterangepicker -->
        {{-- <script src="{{ secure_url('') }}/plugins/moment/moment.min.js"></script> --}}
        {{-- <script src="{{ secure_url('') }}/plugins/daterangepicker/daterangepicker.js"></script> --}}
        <!-- overlayScrollbars -->
        <script src="{{ secure_url('') }}/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
        <!-- AdminLTE App -->
        {{-- <script src="{{ secure_url('') }}/dist/js/adminlte.js"></script> --}}
    </body>
</html>

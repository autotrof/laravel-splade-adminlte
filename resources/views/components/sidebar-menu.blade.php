<nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column nav-flat nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
        <li class="nav-item">
            <Link href="{{ url('') }}" class="nav-link active">
                {{-- <i class="nav-icon fas fa-th"></i> --}}
                <ion-icon name="apps-outline"></ion-icon>
                <p>
                    Beranda
                </p>
            </Link>
        </li>

        {{-- <li class="nav-item menu-open">
            <a href="#" class="nav-link active">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                    Dashboard
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <a href="./index.html" class="nav-link active">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Dashboard v1</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="./index2.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Dashboard v2</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="./index3.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Dashboard v3</p>
                    </a>
                </li>
            </ul>
        </li> --}}

        <li class="nav-header">EXAMPLES</li>
        <li class="nav-item">
            <Link modal href="{{ route('docs') }}" class="nav-link">
                <ion-icon name="calendar-outline"></ion-icon>
                <p>
                    Calendar
                    <span class="badge badge-info right">2</span>
                </p>
            </Link>
        </li>
    </ul>
</nav>
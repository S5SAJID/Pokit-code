import React from 'react'

export default function Footer() {
    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-body-secondary">© 2023 S5 SAJID, Inc</p>

                <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    Pokit Code
                </a>

                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="https://s5sajid.github.io" target='_blank' class="nav-link px-2 text-body-secondary">by S5 SAJID</a></li>
                </ul>
            </footer>
        </div>
    )
}

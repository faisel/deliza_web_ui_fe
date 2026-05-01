import React from 'react'

function CopyrightOne() {
    return (
        <div className="rts-copy-right-1 ptb--10">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-h-2-wrapper">
                            <p className="disc">
                                Deliza - Copyright {new Date().getFullYear()}. All rights reserved.
                            </p>
                            <div className="right">
                                <ul>
                                    <li>
                                        <a href="/blog">Company News</a>
                                    </li>
                                    <li>
                                        <a href="#">Faq</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CopyrightOne
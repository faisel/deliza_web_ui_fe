import React from 'react'
import DelizaHeader from "@/app/components/DelizaHeader";
import CartBreadcrumb from './CartBreadcrumb'
import CartMain from './CartMain'
import BodyClass from '../home-2/BodyClassTwo'
import FooterTen from '../home-10/FooterTen'

function page() {
    return (
        <>
            {/* Body class assign */}
            <BodyClass className="cart-page" />
            {/* Page content */}
            <>

                <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
                <CartBreadcrumb />
                <CartMain />
                <FooterTen />
            </>
        </>
    )
}

export default page
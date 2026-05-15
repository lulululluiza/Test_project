const locators = {
    CART: {
        TITLE: '[data-test="title"]',
        ITEMS: '[data-test="cart-list"]',
        ITEM: '[data-test="inventory-item"]',
        CHECKOUT_BTN: '[data-test="checkout"]'
    },
    CHECKOUT: {
        TITLE: '[data-test="title"]',
        FIRST_NAME: '[data-test="firstName"]',
        LAST_NAME: '[data-test="lastName"]',
        POSTAL_CODE: '[data-test="postalCode"]',
        CONTINUE: '[data-test="continue"]',
        FINISH: '[data-test="finish"]',
        SUBTOTAL: '[data-test="subtotal-label"]',
        TAX_LABEL: '[data-test="tax-label"]',
        TOTAL_LABEL: '[data-test="total-label"]'
    },
    LOGIN: {
        USER: '[data-test=username]',
        PASSWORD: '[data-test=password]',
        BTN_LOGIN: '[data-test=login-button]',
        ERROR_MSG: '[data-test=error]'
    },
    NAVIGATION: {
        CART: '[data-test="shopping-cart-link"]',
        MAIN_MENU: '#react-burger-menu-btn',
        ALL_ITEMS: '[data-test="inventory-sidebar-link"]',
        ABOUT: '[data-test="about-sidebar-link"]',
        LOGOUT: '[data-test="logout-sidebar-link"]'
    },
    PRODUCTS: {
        NAME: '[data-test="inventory-item-name"]',
        SORTER: '[data-test="product-sort-container"]',
        PRICE: '[data-test="inventory-item-price"]'
    },
    PRODUCT: {
        NAME: '[data-test="inventory-item-name"]',
        BACK_BTN: '[data-test="back-to-products"]',
        PRICE: '[data-test="inventory-item-price"]'
    }
}

export default locators;
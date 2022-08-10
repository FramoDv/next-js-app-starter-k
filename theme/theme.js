import {jss} from "react-jss"

const theme = () => {
    const spacing = 8
    const headerHeight = spacing * 8
    const footerHeight = spacing * 6
    const mediaQuery = {
        XS: '@media (max-width: 575px)',
        SM: '@media (max-width: 767px)',
        LG: '@media (max-width: 1199px)',
        MD: '@media (max-width: 991px)',
        XL: '@media (max-width: 1399px)',
        small: '@media (max-width:360px)',
        mobile: '@media (max-width: 1024px)',
        medium: '@media (max-width:1366px)',
        middle: '@media (max-width:640px)',
        ie11: '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)'
    }

    const colors = {
        white: '#FFFFFF',
        black: '#000000',
        lightBlack: '#333333',
        darkGrey: '#989898',
        grey: '#CDCDCD',
        inputGrey: '#E4E4E4',
        lightGrey: '#FAFAFA',
        airbnbRed: '#F23A66',
        darkRed: "#BD0606",
        red: '#FA5E5E',
        lightRed: '#FAC3C3',
        darkGreen: '#007E82',
        green: '#00BC55',
        blueGreen: '#7EEBB7',
        blue: '#18A6F5',
        lightGreen: '#BBE3BA',
        lightBlue: '#E2EEFF',
        violet: '#6A52FF',
        orange: '#E59700',
        yellow: '#FFA318',
        alphaRed: '#FA5E5E66',
        alphaDarkGreen: '#007E8266',
        alphaYellow: '#FFA318EE'
    }

    const clickable = {
        //transition: 'ease-in-out 400ms',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.8,
        }
    }

    const shadow = '0px 4px 16px #E1E1E1'

    const noSelection = {
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        KhtmlUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
    }

    const label = {
        display: 'block',
        fontSize: 14,
        fontWeight: 400,
        color: colors.lightBlack,
        marginBottom: 4
    }

    const input = {
        position: 'relative',
        width: '100%',
        fontSize: 14,
        fontWeight: 500,
        color: colors.black,
        border: 'none',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: colors.inputGrey,
        //transition: 'ease-in-out 300ms',
        background: 'transparent',
        '&:-webkit-autofill': {
            WebkitBackgroundClip: 'text'
        },
        '&:focus': {
            outline: 0,
            borderBottomColor: colors.black
        },
        [mediaQuery.SM]: {
            height: spacing * 5,
            '&:focus': {
                padding: [0, 12],
                borderBottomWidth: 0,
                borderRadius: spacing * 3,
                borderBottomColor: colors.white,
                background: colors.lightBlue
            }
        }
    }
    const inputError = {
        ...input,
        color: colors.red,
        borderBottomColor: colors.red,
        '&:focus': {
            borderBottomColor: colors.red,
            outline: 0
        },
        [mediaQuery.SM]: {
            height: spacing * 5,
            '&:focus': {
                padding: [0, 12],
                border: 'none',
                borderRadius: spacing * 3,
                background: colors.lightRed
            },
        }
    }
    const error = {
        fontSize: 10,
        fontWeight: 700,
        color: colors.red
    }

    const textTruncate = {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    }

    const flexbox = {
        start: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        center: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        end: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        spaceBetween: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    }

    //globals
    jss.createStyleSheet(
        {
            "@font-face": [
                {fontFamily: 'Cereal', fontWeight: 300, src: `url("https://a0.muscache.com/airbnb/static/airbnb-dls-web/build/fonts/Airbnb_Cereal-Book-9a1c9cca9bb3d65fefa2aa487617805e.woff2") format("woff2"), url("https://a0.muscache.com/airbnb/static/airbnb-dls-web/build/fonts/Airbnb_Cereal-Book-aa38e86e3f98554f9f7053d7b713b4db.woff") format('woff')`},
                {fontFamily: 'Cereal', fontWeight: 400, src: `url("https://a0.muscache.com/airbnb/static/airbnb-dls-web/build/fonts/Airbnb_Cereal-Book-9a1c9cca9bb3d65fefa2aa487617805e.woff2") format("woff2"), url("https://a0.muscache.com/airbnb/static/airbnb-dls-web/build/fonts/Airbnb_Cereal-Book-aa38e86e3f98554f9f7053d7b713b4db.woff") format('woff')`},
                {fontFamily: 'Cereal', fontWeight: 500, src: `url("https://a0.muscache.com/airbnb/static/airbnb-dls-web/build/fonts/Airbnb_Cereal-Medium-50fc004b3082375f12ff0cfb67bf8e56.woff2") format("woff2"), url("https://a0.muscache.com/airbnb/static/airbnb-dls-web/build/fonts/Airbnb_Cereal-Medium-4bc8dafd2e0fd8914bf4d5edce9acd24.woff") format('woff')`},
                {fontFamily: 'Cereal', fontWeight: 600, src: `url("https://a0.muscache.com/airbnb/static/airbnb-dls-web/build/fonts/Airbnb_Cereal-Medium-50fc004b3082375f12ff0cfb67bf8e56.woff2") format("woff2"), url("https://a0.muscache.com/airbnb/static/airbnb-dls-web/build/fonts/Airbnb_Cereal-Medium-4bc8dafd2e0fd8914bf4d5edce9acd24.woff") format('woff')`},
                {fontFamily: 'Cereal', fontWeight: 700, src: `url("https://a0.muscache.com/airbnb/static/airbnb-dls-web/build/fonts/Airbnb_Cereal-Bold-bdfb98485e7836ba31b456f65cded088.woff2") format("woff2"), url("https://a0.muscache.com/airbnb/static/airbnb-dls-web/build/fonts/Airbnb_Cereal-Bold-a188841af78481a25b7bb2316a5f5716.woff") format('woff')`},
                {fontFamily: 'Cereal', fontWeight: 800, src: `url("https://a0.muscache.com/airbnb/static/airbnb-dls-web/build/fonts/Airbnb_Cereal-Bold-bdfb98485e7836ba31b456f65cded088.woff2") format("woff2"), url("https://a0.muscache.com/airbnb/static/airbnb-dls-web/build/fonts/Airbnb_Cereal-Bold-a188841af78481a25b7bb2316a5f5716.woff") format('woff')`},
            ],
            "@global html, body": {
                scrollBehavior: "smooth",
                overflowX: "hidden",
                fontFamily: "Cereal",
                fontSize: "16px",
                width: "100%",
                height: "100%",
            },
            "@global h1, h2, h3, p,h4,h5, span, small": {
                "margin-bottom": 0,
            },
            "@global a[data-anchor-unstyled]": {
                "text-decoration": "none",
            },
            "@global a[data-button]": {
                "text-decoration": "none",
            },
            "@global .row": {
                marginLeft: 0,
                marginRight: 0,
            }
        },
        {index: 3, meta: "globals"}
    ).attach()

    const control = {label, input, inputError, error}

    return {
        spacing,
        shadow,
        headerHeight,
        footerHeight,
        colors,
        clickable,
        control,
        mediaQuery,
        noSelection,
        textTruncate,
        flexbox
    }
}

export default theme

import { amber, deepOrange, deepPurple, grey, blue, common } from '@mui/material/colors';


const palette = {
    light: {
        primary: {
            main: '#34C0AC',
            light: '#B1DED3',
            dark: '#00765A'
        }
    },
    dark: {
        primary: {
            main: '#5A458F',
            light: '#F54A05',
            dark: '#610600'
        }
    }
}

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: palette.light.primary.main,
                    light: palette.light.primary.light,
                    dark: palette.light.primary.dark,
                },

                divider: amber[200],
                text: {
                    primary: common.black,
                    secondary: grey[800],
                },
            }
            : {
                primary: {
                    main: palette.dark.primary.main,
                    light: palette.dark.primary.light,
                    dark: palette.dark.primary.dark,
                },
                divider: deepPurple[700],
                background: {
                    default: '#00193B',
                    paper: '#808EF2',
                },
                text: {
                    primary: common.white,
                    secondary: '#FA6605',
                },
            }),
    },
    typography: {
        fontFamily: [
            'rubik',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        body1: {
            fontFamily: 'rubik, Arial, sans-serif',
        },
    },
})

export const getThemedComponents = (mode) => ({
    components: {
        ...(mode === 'light'
            ? {
                MuiAppBar: {
                    styleOverrides: {
                        colorPrimary: {
                            backgroundColor: grey[800],
                        },
                    },
                },
                MuiTextField: {
                    styleOverrides: {
                        root: {
                            margin: "10px 0"
                        }
                    }
                },
                MuiLink: {
                    styleOverrides: {
                        root: {
                            textDecoration: "none",
                            color: common.black
                        }
                    },
                    variants: [
                        {
                            props: { variant: "h3" }
                        }
                    ]
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            borderRadius: 6,
                            color: common.black,
                            fontFamily:
                                "rubik, Roboto, 'Helvetica Neue', Arial, sans-serif",
                            fontSize: 15,
                            borderColor: common.black,
                            borderWidth: 2,
                            '&:hover': {
                                borderWidth: 2,
                            },
                        },
                    },
                    variants: [
                        {
                            props: { variant: 'contained' },
                            style: {
                                fontFamily:
                                    "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
                            },
                        },
                        {
                            props: { variant: 'outlined' },
                            style: {
                                color: palette.light.primary.main,
                            },
                        },
                        {
                            props: { variant: 'primary', color: 'primary' },
                            style: {
                                border: '4px dashed blue',
                            },
                        },
                    ],
                },
                MuiList: {
                    styleOverrides: {
                        root: {},
                    },
                },
                MuiMenuItem: {
                    styleOverrides: {
                        root: {
                            color: common.white,
                            alignItems: 'stretch',
                            fontFamily:
                                "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
                        },
                    },
                },
                MuiAccordion: {
                    styleOverrides: {
                        root: {
                            color: common.white,
                            fontFamily:
                                "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
                        },
                    },
                },
            }
            : {
                MuiAppBar: {
                    styleOverrides: {
                        colorPrimary: {
                            backgroundColor: blue[800],
                        },
                    },
                },
                MuiLink: {
                    styleOverrides: {
                        root: {
                            textDecoration: "none",
                            color: common.white
                        }
                    },
                    variants: [
                        {
                            props: { variant: "h3" }
                        }
                    ]
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            borderRadius: 9,
                            color: common.white,
                            fontFamily:
                                "rubik, Roboto, 'Helvetica Neue', Arial, sans-serif",
                            fontSize: 15,
                            borderColor: common.white,
                            borderWidth: 2,
                            '&:hover': {
                                borderWidth: 2,
                            },
                        },
                    },
                    variants: [
                        {
                            props: { variant: 'contained' },
                            style: {
                                fontFamily:
                                    "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
                            },
                        },
                        {
                            props: { variant: 'outlined' },
                            style: {
                                color: palette.light.primary.main,
                            },
                        },
                        {
                            props: { variant: 'primary', color: 'primary' },
                            style: {
                                border: '4px dashed blue',
                            },
                        },
                    ],
                },
            }
        ),
    },
})
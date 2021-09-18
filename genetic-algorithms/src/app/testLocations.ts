/*
PostMan Destinations & Origins Format
47.62063644861091%2C-122.34929885947075%7C
44.970432707847024%2C-93.2882593996397%7C
30.269443241351368%2C-97.76885911178147%7C
36.13231423794486%2C-111.24157371269685%7C
40.748683354646886%2C-73.98576350196531%7C
40.82128009913491%2C-81.3977892289526%7C
37.4221933892272%2C-122.08407897320079%7C
43.87923394655904%2C-103.45912034606917%7C
35.57263462731058%2C-75.46308301077248%7C
36.12255296163005%2C-115.1733249939097%7C
*/

let seattle = { lat:  47.62063644861091, lng:  -122.34929885947075 }
let minneapolis_art_garden = { lat: 44.970432707847024, lng:  -93.2882593996397 }
let austin_texas = { lat: 30.269443241351368, lng:  -97.76885911178147 }
let grand_canyon = { lat: 36.10663966511868, lng:  -112.07696093664649 }
let empire_state_building = { lat: 40.748683354646886, lng:  -73.98576350196531 }
let canton_ohio = { lat: 40.82128009913491, lng:  -81.3977892289526 }
let google_hq = { lat: 37.4221933892272, lng:  -122.08407897320079 }
let mount_rushmore = { lat: 43.87923394655904, lng:  -103.45912034606917 }
let outer_banks = { lat: 35.57263462731058, lng:  -75.46308301077248 }
let las_vegas = { lat: 36.12255296163005, lng:  -115.1733249939097 }

export class location {
    lat: number
    lng: number
}

export const mockLocationsList: location[] = [seattle, minneapolis_art_garden, austin_texas, 
grand_canyon, empire_state_building, canton_ohio, google_hq, mount_rushmore, outer_banks, las_vegas]

export class DistanceMatrix {
    destination_addresses: string[]
    origin_addresses: string[]
    rows: {
        elements: Elements[]
    }[]
    status: string
}

export class Elements {
    distance: TextValue
    duration: TextValue
    status: string
}

export class TextValue {
    text: string
    value: number
}

export const sampleResultDistances: DistanceMatrix = 
{
    destination_addresses: [
        "400 Broad St, Seattle, WA 98109, USA",
        "1664 Hennepin Ave, Minneapolis, MN 55403, USA",
        "2200 Stratford Dr, Austin, TX 78746, USA",
        "306 Main St, Tuba City, AZ 86045, USA",
        "16 W 34th St, New York, NY 10118, USA",
        "2121 George Halas Dr NW, Canton, OH 44708, USA",
        "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA",
        "64 Presidential Trail, Keystone, SD 57751, USA",
        "25246 Wimble Shores N, North Carolina 27959, USA",
        "1403 S Las Vegas Blvd, Las Vegas, NV 89109, USA"
    ],
    origin_addresses: [
        "400 Broad St, Seattle, WA 98109, USA",
        "1664 Hennepin Ave, Minneapolis, MN 55403, USA",
        "2200 Stratford Dr, Austin, TX 78746, USA",
        "306 Main St, Tuba City, AZ 86045, USA",
        "16 W 34th St, New York, NY 10118, USA",
        "2121 George Halas Dr NW, Canton, OH 44708, USA",
        "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA",
        "64 Presidential Trail, Keystone, SD 57751, USA",
        "25246 Wimble Shores N, North Carolina 27959, USA",
        "1403 S Las Vegas Blvd, Las Vegas, NV 89109, USA"
    ],
    rows: [
        {
            elements: [
                {
                    distance: {
                        text: "1 m",
                        value: 0
                    },
                    duration: {
                        text: "1 min",
                        value: 0
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,667 km",
                        value: 2667050
                    },
                    duration: {
                        text: "23 hours 48 mins",
                        value: 85690
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,412 km",
                        value: 3412010
                    },
                    duration: {
                        text: "1 day 9 hours",
                        value: 117347
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,080 km",
                        value: 2079788
                    },
                    duration: {
                        text: "19 hours 26 mins",
                        value: 69938
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "4,595 km",
                        value: 4594911
                    },
                    duration: {
                        text: "1 day 18 hours",
                        value: 151016
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,941 km",
                        value: 3940781
                    },
                    duration: {
                        text: "1 day 12 hours",
                        value: 128564
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,355 km",
                        value: 1355452
                    },
                    duration: {
                        text: "13 hours 8 mins",
                        value: 47263
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,903 km",
                        value: 1902563
                    },
                    duration: {
                        text: "17 hours 27 mins",
                        value: 62807
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "4,927 km",
                        value: 4927342
                    },
                    duration: {
                        text: "1 day 21 hours",
                        value: 163449
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,800 km",
                        value: 1799809
                    },
                    duration: {
                        text: "17 hours 4 mins",
                        value: 61433
                    },
                    status: "OK"
                }
            ]
        },
        {
            elements: [
                {
                    distance: {
                        text: "2,668 km",
                        value: 2668188
                    },
                    duration: {
                        text: "23 hours 52 mins",
                        value: 85914
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1 m",
                        value: 0
                    },
                    duration: {
                        text: "1 min",
                        value: 0
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,892 km",
                        value: 1891946
                    },
                    duration: {
                        text: "16 hours 52 mins",
                        value: 60704
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,433 km",
                        value: 2432562
                    },
                    duration: {
                        text: "22 hours 12 mins",
                        value: 79914
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,930 km",
                        value: 1930418
                    },
                    duration: {
                        text: "18 hours 13 mins",
                        value: 65555
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,276 km",
                        value: 1276288
                    },
                    duration: {
                        text: "11 hours 58 mins",
                        value: 43104
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,231 km",
                        value: 3230769
                    },
                    duration: {
                        text: "1 day 5 hours",
                        value: 105249
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "962 km",
                        value: 961506
                    },
                    duration: {
                        text: "8 hours 48 mins",
                        value: 31683
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,263 km",
                        value: 2262848
                    },
                    duration: {
                        text: "21 hours 40 mins",
                        value: 77988
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,674 km",
                        value: 2674171
                    },
                    duration: {
                        text: "23 hours 44 mins",
                        value: 85446
                    },
                    status: "OK"
                }
            ]
        },
        {
            elements: [
                {
                    distance: {
                        text: "3,409 km",
                        value: 3408660
                    },
                    duration: {
                        text: "1 day 9 hours",
                        value: 117530
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,892 km",
                        value: 1891895
                    },
                    duration: {
                        text: "16 hours 48 mins",
                        value: 60489
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1 m",
                        value: 0
                    },
                    duration: {
                        text: "1 min",
                        value: 0
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,627 km",
                        value: 1627265
                    },
                    duration: {
                        text: "15 hours 45 mins",
                        value: 56716
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,812 km",
                        value: 2812474
                    },
                    duration: {
                        text: "1 day 2 hours",
                        value: 92653
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,214 km",
                        value: 2213950
                    },
                    duration: {
                        text: "20 hours 3 mins",
                        value: 72203
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,779 km",
                        value: 2779418
                    },
                    duration: {
                        text: "1 day 1 hour",
                        value: 91392
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,990 km",
                        value: 1989689
                    },
                    duration: {
                        text: "18 hours 42 mins",
                        value: 67290
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,508 km",
                        value: 2508404
                    },
                    duration: {
                        text: "23 hours 0 mins",
                        value: 82825
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,047 km",
                        value: 2046632
                    },
                    duration: {
                        text: "19 hours 5 mins",
                        value: 68675
                    },
                    status: "OK"
                }
            ]
        },
        {
            elements: [
                {
                    distance: {
                        text: "2,079 km",
                        value: 2079102
                    },
                    duration: {
                        text: "19 hours 28 mins",
                        value: 70073
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,432 km",
                        value: 2431668
                    },
                    duration: {
                        text: "22 hours 8 mins",
                        value: 79709
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,630 km",
                        value: 1629578
                    },
                    duration: {
                        text: "15 hours 47 mins",
                        value: 56806
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1 m",
                        value: 0
                    },
                    duration: {
                        text: "1 min",
                        value: 0
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,719 km",
                        value: 3719219
                    },
                    duration: {
                        text: "1 day 11 hours",
                        value: 124791
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,077 km",
                        value: 3077420
                    },
                    duration: {
                        text: "1 day 4 hours",
                        value: 101488
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,307 km",
                        value: 1307337
                    },
                    duration: {
                        text: "12 hours 21 mins",
                        value: 44485
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,561 km",
                        value: 1561284
                    },
                    duration: {
                        text: "14 hours 56 mins",
                        value: 53754
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,687 km",
                        value: 3686730
                    },
                    duration: {
                        text: "1 day 10 hours",
                        value: 122323
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "538 km",
                        value: 537752
                    },
                    duration: {
                        text: "5 hours 4 mins",
                        value: 18243
                    },
                    status: "OK"
                }
            ]
        },
        {
            elements: [
                {
                    distance: {
                        text: "4,595 km",
                        value: 4594683
                    },
                    duration: {
                        text: "1 day 18 hours",
                        value: 150894
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,931 km",
                        value: 1930512
                    },
                    duration: {
                        text: "18 hours 10 mins",
                        value: 65422
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,814 km",
                        value: 2814391
                    },
                    duration: {
                        text: "1 day 2 hours",
                        value: 92980
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,719 km",
                        value: 3719451
                    },
                    duration: {
                        text: "1 day 11 hours",
                        value: 124611
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1 m",
                        value: 0
                    },
                    duration: {
                        text: "1 min",
                        value: 0
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "716 km",
                        value: 716489
                    },
                    duration: {
                        text: "7 hours 2 mins",
                        value: 25335
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "4,726 km",
                        value: 4726052
                    },
                    duration: {
                        text: "1 day 19 hours",
                        value: 155621
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,775 km",
                        value: 2774918
                    },
                    duration: {
                        text: "1 day 2 hours",
                        value: 91983
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "759 km",
                        value: 759034
                    },
                    duration: {
                        text: "8 hours 23 mins",
                        value: 30200
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "4,066 km",
                        value: 4065944
                    },
                    duration: {
                        text: "1 day 13 hours",
                        value: 133118
                    },
                    status: "OK"
                }
            ]
        },
        {
            elements: [
                {
                    distance: {
                        text: "3,941 km",
                        value: 3941158
                    },
                    duration: {
                        text: "1 day 12 hours",
                        value: 128606
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,277 km",
                        value: 1276988
                    },
                    duration: {
                        text: "11 hours 59 mins",
                        value: 43133
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,204 km",
                        value: 2204349
                    },
                    duration: {
                        text: "20 hours 11 mins",
                        value: 72669
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,061 km",
                        value: 3061167
                    },
                    duration: {
                        text: "1 day 4 hours",
                        value: 101318
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "717 km",
                        value: 716549
                    },
                    duration: {
                        text: "7 hours 6 mins",
                        value: 25557
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1 m",
                        value: 0
                    },
                    duration: {
                        text: "1 min",
                        value: 0
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "4,073 km",
                        value: 4072528
                    },
                    duration: {
                        text: "1 day 13 hours",
                        value: 133333
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,121 km",
                        value: 2121394
                    },
                    duration: {
                        text: "19 hours 22 mins",
                        value: 69695
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,029 km",
                        value: 1029310
                    },
                    duration: {
                        text: "10 hours 34 mins",
                        value: 38034
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,412 km",
                        value: 3412420
                    },
                    duration: {
                        text: "1 day 7 hours",
                        value: 110830
                    },
                    status: "OK"
                }
            ]
        },
        {
            elements: [
                {
                    distance: {
                        text: "1,355 km",
                        value: 1354764
                    },
                    duration: {
                        text: "13 hours 7 mins",
                        value: 47226
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,229 km",
                        value: 3228926
                    },
                    duration: {
                        text: "1 day 5 hours",
                        value: 104817
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,780 km",
                        value: 2779544
                    },
                    duration: {
                        text: "1 day 1 hour",
                        value: 91508
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,310 km",
                        value: 1309836
                    },
                    duration: {
                        text: "12 hours 26 mins",
                        value: 44760
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "4,728 km",
                        value: 4728500
                    },
                    duration: {
                        text: "1 day 19 hours",
                        value: 155532
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "4,074 km",
                        value: 4074370
                    },
                    duration: {
                        text: "1 day 13 hours",
                        value: 133081
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1 m",
                        value: 0
                    },
                    duration: {
                        text: "1 min",
                        value: 0
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,235 km",
                        value: 2234697
                    },
                    duration: {
                        text: "20 hours 40 mins",
                        value: 74409
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "4,877 km",
                        value: 4877191
                    },
                    duration: {
                        text: "1 day 21 hours",
                        value: 160785
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "863 km",
                        value: 863199
                    },
                    duration: {
                        text: "8 hours 8 mins",
                        value: 29302
                    },
                    status: "OK"
                }
            ]
        },
        {
            elements: [
                {
                    distance: {
                        text: "1,904 km",
                        value: 1903866
                    },
                    duration: {
                        text: "17 hours 30 mins",
                        value: 62981
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "960 km",
                        value: 959935
                    },
                    duration: {
                        text: "8 hours 44 mins",
                        value: 31450
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,991 km",
                        value: 1990947
                    },
                    duration: {
                        text: "18 hours 46 mins",
                        value: 67532
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,562 km",
                        value: 1562374
                    },
                    duration: {
                        text: "14 hours 59 mins",
                        value: 53969
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,775 km",
                        value: 2774660
                    },
                    duration: {
                        text: "1 day 2 hours",
                        value: 91981
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,121 km",
                        value: 2120531
                    },
                    duration: {
                        text: "19 hours 19 mins",
                        value: 69530
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,235 km",
                        value: 2235428
                    },
                    duration: {
                        text: "20 hours 47 mins",
                        value: 74832
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1 m",
                        value: 0
                    },
                    duration: {
                        text: "1 min",
                        value: 0
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,107 km",
                        value: 3107091
                    },
                    duration: {
                        text: "1 day 5 hours",
                        value: 104415
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,653 km",
                        value: 1653292
                    },
                    duration: {
                        text: "15 hours 22 mins",
                        value: 55293
                    },
                    status: "OK"
                }
            ]
        },
        {
            elements: [
                {
                    distance: {
                        text: "4,928 km",
                        value: 4927737
                    },
                    duration: {
                        text: "1 day 21 hours",
                        value: 163522
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,264 km",
                        value: 2263567
                    },
                    duration: {
                        text: "21 hours 41 mins",
                        value: 78050
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,512 km",
                        value: 2511924
                    },
                    duration: {
                        text: "23 hours 10 mins",
                        value: 83382
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,682 km",
                        value: 3682486
                    },
                    duration: {
                        text: "1 day 10 hours",
                        value: 122389
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "757 km",
                        value: 757103
                    },
                    duration: {
                        text: "8 hours 22 mins",
                        value: 30146
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,027 km",
                        value: 1026915
                    },
                    duration: {
                        text: "10 hours 33 mins",
                        value: 37997
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "4,871 km",
                        value: 4871439
                    },
                    duration: {
                        text: "1 day 21 hours",
                        value: 160591
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,108 km",
                        value: 3107973
                    },
                    duration: {
                        text: "1 day 5 hours",
                        value: 104612
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1 m",
                        value: 0
                    },
                    duration: {
                        text: "1 min",
                        value: 0
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "4,102 km",
                        value: 4101853
                    },
                    duration: {
                        text: "1 day 13 hours",
                        value: 134348
                    },
                    status: "OK"
                }
            ]
        },
        {
            elements: [
                {
                    distance: {
                        text: "1,801 km",
                        value: 1800999
                    },
                    duration: {
                        text: "17 hours 8 mins",
                        value: 61653
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,673 km",
                        value: 2673097
                    },
                    duration: {
                        text: "23 hours 44 mins",
                        value: 85423
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "2,049 km",
                        value: 2049164
                    },
                    duration: {
                        text: "19 hours 11 mins",
                        value: 69034
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "539 km",
                        value: 538961
                    },
                    duration: {
                        text: "5 hours 9 mins",
                        value: 18526
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "4,067 km",
                        value: 4067341
                    },
                    duration: {
                        text: "1 day 13 hours",
                        value: 133241
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "3,413 km",
                        value: 3413212
                    },
                    duration: {
                        text: "1 day 7 hours",
                        value: 110790
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "861 km",
                        value: 861111
                    },
                    duration: {
                        text: "8 hours 9 mins",
                        value: 29328
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1,653 km",
                        value: 1652794
                    },
                    duration: {
                        text: "15 hours 18 mins",
                        value: 55082
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "4,106 km",
                        value: 4106316
                    },
                    duration: {
                        text: "1 day 13 hours",
                        value: 134551
                    },
                    status: "OK"
                },
                {
                    distance: {
                        text: "1 m",
                        value: 0
                    },
                    duration: {
                        text: "1 min",
                        value: 0
                    },
                    status: "OK"
                }
            ]
        }
    ],
    status: "OK"
}
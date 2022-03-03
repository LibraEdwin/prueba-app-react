import { useEffect, useState } from "react";

export const usePersonajes = () => {

    const [ANewHope, setANewHope] = useState([])


    useEffect(() => {
        const getEvento = async () => {
            let resp = await fetch("https://swapi.dev/api/people/1/")
            let data = await resp.json()

            let resp1 = await fetch("https://swapi.dev/api/people/2/")
            let data1 = await resp1.json()

            let resp2 = await fetch("https://swapi.dev/api/people/3/")
            let data2 = await resp2.json()

            let resp3 = await fetch("https://swapi.dev/api/people/4/")
            let data3 = await resp3.json()

            let resp4 = await fetch("https://swapi.dev/api/people/5/")
            let data4 = await resp4.json()

            let resp5 = await fetch("https://swapi.dev/api/people/6/")
            let data5 = await resp5.json()

            let resp6 = await fetch("https://swapi.dev/api/people/7/")
            let data6 = await resp6.json()

            let resp7 = await fetch("https://swapi.dev/api/people/8/")
            let data7 = await resp7.json()

            let resp8 = await fetch("https://swapi.dev/api/people/9/")
            let data8 = await resp8.json()

            let resp9 = await fetch("https://swapi.dev/api/people/10/")
            let data9 = await resp9.json()

            let resp10 = await fetch("https://swapi.dev/api/people/12/")
            let data10 = await resp10.json()

            let resp11 = await fetch("https://swapi.dev/api/people/13/")
            let data11 = await resp11.json()

            let resp12 = await fetch("https://swapi.dev/api/people/14/")
            let data12 = await resp12.json()

            let resp13 = await fetch("https://swapi.dev/api/people/15/")
            let data13 = await resp13.json()

            let resp14 = await fetch("https://swapi.dev/api/people/16/")
            let data14 = await resp14.json()

            let resp15 = await fetch("https://swapi.dev/api/people/18/")
            let data15 = await resp15.json()

            let resp16 = await fetch("https://swapi.dev/api/people/19/")
            let data16 = await resp16.json()

            let resp17 = await fetch("https://swapi.dev/api/people/81/")
            let data17 = await resp17.json()
            setANewHope(
                [
                    {
                        name: data.name,
                        homeworld: data.homeworld,
                        hair_color: data.hair_color,
                        height: data.height
                    },
                    {
                        name: data1.name,
                        homeworld: data1.homeworld,
                        hair_color: data1.hair_color,
                        height: data1.height
                    },
                    {
                        name: data2.name,
                        homeworld: data2.homeworld,
                        hair_color: data2.hair_color,
                        height: data2.height
                    },
                    {
                        name: data3.name,
                        homeworld: data3.homeworld,
                        hair_color: data3.hair_color,
                        height: data3.height
                    },
                    {
                        name: data4.name,
                        homeworld: data4.homeworld,
                        hair_color: data4.hair_color,
                        height: data4.height
                    },
                    {
                        name: data5.name,
                        homeworld: data5.homeworld,
                        hair_color: data5.hair_color,
                        height: data5.height
                    },
                    {
                        name: data6.name,
                        homeworld: data6.homeworld,
                        hair_color: data6.hair_color,
                        height: data6.height
                    },
                    {
                        name: data7.name,
                        homeworld: data7.homeworld,
                        hair_color: data7.hair_color,
                        height: data7.height
                    },
                    {
                        name: data8.name,
                        homeworld: data8.homeworld,
                        hair_color: data8.hair_color,
                        height: data8.height
                    },
                    {
                        name: data9.name,
                        homeworld: data9.homeworld,
                        hair_color: data9.hair_color,
                        height9: data.height
                    },
                    {
                        name: data10.name,
                        homeworld: data10.homeworld,
                        hair_color: data10.hair_color,
                        height: data10.height
                    },
                    {
                        name: data11.name,
                        homeworld: data11.homeworld,
                        hair_color: data11.hair_color,
                        height: data11.height
                    },
                    {
                        name: data12.name,
                        homeworld: data12.homeworld,
                        hair_color: data12.hair_color,
                        height: data12.height
                    },
                    {
                        name: data13.name,
                        homeworld: data13.homeworld,
                        hair_color: data13.hair_color,
                        height: data13.height
                    },
                    {
                        name: data14.name,
                        homeworld: data14.homeworld,
                        hair_color: data14.hair_color,
                        height: data14.height
                    },
                    {
                        name: data15.name,
                        homeworld: data15.homeworld,
                        hair_color: data15.hair_color,
                        height: data15.height
                    },
                    {
                        name: data16.name,
                        homeworld: data16.homeworld,
                        hair_color: data16.hair_color,
                        height: data16.height
                    },
                    {
                        name: data17.name,
                        homeworld: data17.homeworld,
                        hair_color: data17.hair_color,
                        height: data17.height
                    }
            ]
            )
        }
        getEvento()
    }, []);

    const [TheEmpireStrikesBack, setTheEmpireStrikesBack] = useState([])


    useEffect(() => {
        const getEvento = async () => {
            let resp = await fetch("https://swapi.dev/api/people/1/")
            let data = await resp.json()

            let resp1 = await fetch("https://swapi.dev/api/people/2/")
            let data1 = await resp1.json()

            let resp2 = await fetch( "https://swapi.dev/api/people/2/")
            let data2 = await resp2.json()

            let resp3 = await fetch("https://swapi.dev/api/people/3/")
            let data3 = await resp3.json()

            let resp4 = await fetch("https://swapi.dev/api/people/4/")
            let data4 = await resp4.json()

            let resp5 = await fetch("https://swapi.dev/api/people/5/")
            let data5 = await resp5.json()

            let resp6 = await fetch("https://swapi.dev/api/people/10/")
            let data6 = await resp6.json()

            let resp7 = await fetch("https://swapi.dev/api/people/13/")
            let data7 = await resp7.json()

            let resp8 = await fetch("https://swapi.dev/api/people/14/")
            let data8 = await resp8.json()

            let resp9 = await fetch("https://swapi.dev/api/people/18/")
            let data9 = await resp9.json()

            let resp10 = await fetch("https://swapi.dev/api/people/20/")
            let data10 = await resp10.json()

            let resp11 = await fetch("https://swapi.dev/api/people/21/")
            let data11 = await resp11.json()

            let resp12 = await fetch("https://swapi.dev/api/people/22/")
            let data12 = await resp12.json()

            let resp13 = await fetch("https://swapi.dev/api/people/23/")
            let data13 = await resp13.json()

            let resp14 = await fetch("https://swapi.dev/api/people/24/")
            let data14 = await resp14.json()

            let resp15 = await fetch("https://swapi.dev/api/people/25/")
            let data15 = await resp15.json()

            let resp16 = await fetch("https://swapi.dev/api/people/26/")
            let data16 = await resp16.json()
            setTheEmpireStrikesBack(
                [
                    {
                        name: data.name,
                        homeworld: data.homeworld,
                        hair_color: data.hair_color,
                        height: data.height
                    },
                    {
                        name: data1.name,
                        homeworld: data1.homeworld,
                        hair_color: data1.hair_color,
                        height: data1.height
                    },
                    {
                        name: data2.name,
                        homeworld: data2.homeworld,
                        hair_color: data2.hair_color,
                        height: data2.height
                    },
                    {
                        name: data3.name,
                        homeworld: data3.homeworld,
                        hair_color: data3.hair_color,
                        height: data3.height
                    },
                    {
                        name: data4.name,
                        homeworld: data4.homeworld,
                        hair_color: data4.hair_color,
                        height: data4.height
                    },
                    {
                        name: data5.name,
                        homeworld: data5.homeworld,
                        hair_color: data5.hair_color,
                        height: data5.height
                    },
                    {
                        name: data6.name,
                        homeworld: data6.homeworld,
                        hair_color: data6.hair_color,
                        height: data6.height
                    },
                    {
                        name: data7.name,
                        homeworld: data7.homeworld,
                        hair_color: data7.hair_color,
                        height: data7.height
                    },
                    {
                        name: data8.name,
                        homeworld: data8.homeworld,
                        hair_color: data8.hair_color,
                        height: data8.height
                    },
                    {
                        name: data9.name,
                        homeworld: data9.homeworld,
                        hair_color: data9.hair_color,
                        height9: data.height
                    },
                    {
                        name: data10.name,
                        homeworld: data10.homeworld,
                        hair_color: data10.hair_color,
                        height: data10.height
                    },
                    {
                        name: data11.name,
                        homeworld: data11.homeworld,
                        hair_color: data11.hair_color,
                        height: data11.height
                    },
                    {
                        name: data12.name,
                        homeworld: data12.homeworld,
                        hair_color: data12.hair_color,
                        height: data12.height
                    },
                    {
                        name: data13.name,
                        homeworld: data13.homeworld,
                        hair_color: data13.hair_color,
                        height: data13.height
                    },
                    {
                        name: data14.name,
                        homeworld: data14.homeworld,
                        hair_color: data14.hair_color,
                        height: data14.height
                    },
                    {
                        name: data15.name,
                        homeworld: data15.homeworld,
                        hair_color: data15.hair_color,
                        height: data15.height
                    },
                    {
                        name: data16.name,
                        homeworld: data16.homeworld,
                        hair_color: data16.hair_color,
                        height: data16.height
                    }
            ]
            )
        }
        getEvento()
    }, []);

    const [ReturnoftheJedi, setReturnoftheJedi] = useState([])


    useEffect(() => {
        const getEvento = async () => {
            let resp = await fetch("https://swapi.dev/api/people/1/")
            let data = await resp.json()

            let resp1 = await fetch("https://swapi.dev/api/people/2/")
            let data1 = await resp1.json()

            let resp2 = await fetch("https://swapi.dev/api/people/3/")
            let data2 = await resp2.json()

            let resp3 = await fetch("https://swapi.dev/api/people/4/")
            let data3 = await resp3.json()

            let resp4 = await fetch("https://swapi.dev/api/people/5/")
            let data4 = await resp4.json()

            let resp5 = await fetch("https://swapi.dev/api/people/10/")
            let data5 = await resp5.json()

            let resp6 = await fetch("https://swapi.dev/api/people/13/")
            let data6 = await resp6.json()

            let resp7 = await fetch("https://swapi.dev/api/people/14/")
            let data7 = await resp7.json()

            let resp8 = await fetch("https://swapi.dev/api/people/16/")
            let data8 = await resp8.json()

            let resp9 = await fetch("https://swapi.dev/api/people/18/")
            let data9 = await resp9.json()

            let resp10 = await fetch("https://swapi.dev/api/people/20/")
            let data10 = await resp10.json()

            let resp11 = await fetch("https://swapi.dev/api/people/21/")
            let data11 = await resp11.json()

            let resp12 = await fetch("https://swapi.dev/api/people/22/")
            let data12 = await resp12.json()

            let resp13 = await fetch("https://swapi.dev/api/people/25/")
            let data13 = await resp13.json()

            let resp14 = await fetch("https://swapi.dev/api/people/27/")
            let data14 = await resp14.json()

            let resp15 = await fetch("https://swapi.dev/api/people/28/")
            let data15 = await resp15.json()

            let resp16 = await fetch("https://swapi.dev/api/people/29/")
            let data16 = await resp16.json()

            let resp17 = await fetch("https://swapi.dev/api/people/30/")
            let data17 = await resp17.json()

            let resp18 = await fetch("https://swapi.dev/api/people/31/")
            let data18 = await resp18.json()

            let resp19 = await fetch("https://swapi.dev/api/people/45/")
            let data19 = await resp19.json()
            setReturnoftheJedi(
                [
                    {
                        name: data.name,
                        homeworld: data.homeworld,
                        hair_color: data.hair_color,
                        height: data.height
                    },
                    {
                        name: data1.name,
                        homeworld: data1.homeworld,
                        hair_color: data1.hair_color,
                        height: data1.height
                    },
                    {
                        name: data2.name,
                        homeworld: data2.homeworld,
                        hair_color: data2.hair_color,
                        height: data2.height
                    },
                    {
                        name: data3.name,
                        homeworld: data3.homeworld,
                        hair_color: data3.hair_color,
                        height: data3.height
                    },
                    {
                        name: data4.name,
                        homeworld: data4.homeworld,
                        hair_color: data4.hair_color,
                        height: data4.height
                    },
                    {
                        name: data5.name,
                        homeworld: data5.homeworld,
                        hair_color: data5.hair_color,
                        height: data5.height
                    },
                    {
                        name: data6.name,
                        homeworld: data6.homeworld,
                        hair_color: data6.hair_color,
                        height: data6.height
                    },
                    {
                        name: data7.name,
                        homeworld: data7.homeworld,
                        hair_color: data7.hair_color,
                        height: data7.height
                    },
                    {
                        name: data8.name,
                        homeworld: data8.homeworld,
                        hair_color: data8.hair_color,
                        height: data8.height
                    },
                    {
                        name: data9.name,
                        homeworld: data9.homeworld,
                        hair_color: data9.hair_color,
                        height9: data.height
                    },
                    {
                        name: data10.name,
                        homeworld: data10.homeworld,
                        hair_color: data10.hair_color,
                        height: data10.height
                    },
                    {
                        name: data11.name,
                        homeworld: data11.homeworld,
                        hair_color: data11.hair_color,
                        height: data11.height
                    },
                    {
                        name: data12.name,
                        homeworld: data12.homeworld,
                        hair_color: data12.hair_color,
                        height: data12.height
                    },
                    {
                        name: data13.name,
                        homeworld: data13.homeworld,
                        hair_color: data13.hair_color,
                        height: data13.height
                    },
                    {
                        name: data14.name,
                        homeworld: data14.homeworld,
                        hair_color: data14.hair_color,
                        height: data14.height
                    },
                    {
                        name: data15.name,
                        homeworld: data15.homeworld,
                        hair_color: data15.hair_color,
                        height: data15.height
                    },
                    {
                        name: data16.name,
                        homeworld: data16.homeworld,
                        hair_color: data16.hair_color,
                        height: data16.height
                    },
                    {
                        name: data17.name,
                        homeworld: data17.homeworld,
                        hair_color: data17.hair_color,
                        height: data17.height
                    },
                    {
                        name: data18.name,
                        homeworld: data18.homeworld,
                        hair_color: data18.hair_color,
                        height: data18.height
                    },
                    {
                        name: data19.name,
                        homeworld: data19.homeworld,
                        hair_color: data19.hair_color,
                        height: data19.height
                    }
            ]
            )
        }
        getEvento()
    }, []);

    const [RevengeoftheSith, setRevengeoftheSith] = useState([])


    useEffect(() => {
        const getEvento = async () => {
            let resp = await fetch("https://swapi.dev/api/people/1/")
            let data = await resp.json()

            let resp1 = await fetch("https://swapi.dev/api/people/2/")
            let data1 = await resp1.json()

            let resp2 = await fetch("https://swapi.dev/api/people/3/")
            let data2 = await resp2.json()

            let resp3 = await fetch("https://swapi.dev/api/people/4/")
            let data3 = await resp3.json()

            let resp4 = await fetch("https://swapi.dev/api/people/5/")
            let data4 = await resp4.json()

            let resp5 = await fetch("https://swapi.dev/api/people/6/")
            let data5 = await resp5.json()

            let resp6 = await fetch("https://swapi.dev/api/people/7/")
            let data6 = await resp6.json()

            let resp7 = await fetch("https://swapi.dev/api/people/10/")
            let data7 = await resp7.json()

            let resp8 = await fetch("https://swapi.dev/api/people/11/")
            let data8 = await resp8.json()

            let resp9 = await fetch("https://swapi.dev/api/people/12/")
            let data9 = await resp9.json()

            let resp10 = await fetch("https://swapi.dev/api/people/13/")
            let data10 = await resp10.json()

            let resp11 = await fetch("https://swapi.dev/api/people/20/")
            let data11 = await resp11.json()

            let resp12 = await fetch("https://swapi.dev/api/people/21/")
            let data12 = await resp12.json()

            let resp13 = await fetch("https://swapi.dev/api/people/33/")
            let data13 = await resp13.json()

            let resp14 = await fetch("https://swapi.dev/api/people/35/")
            let data14 = await resp14.json()

            let resp15 = await fetch("https://swapi.dev/api/people/46/")
            let data15 = await resp15.json()

            let resp16 = await fetch("https://swapi.dev/api/people/51/")
            let data16 = await resp16.json()

            let resp17 = await fetch("https://swapi.dev/api/people/52/")
            let data17 = await resp17.json()

            let resp18 = await fetch("https://swapi.dev/api/people/53/")
            let data18 = await resp18.json()

            let resp19 = await fetch("https://swapi.dev/api/people/54/")
            let data19 = await resp19.json()

            let resp20 = await fetch("https://swapi.dev/api/people/55/")
            let data20 = await resp20.json()

            let resp21 = await fetch("https://swapi.dev/api/people/56/")
            let data21 = await resp21.json()

            let resp22 = await fetch("https://swapi.dev/api/people/58/")
            let data22 = await resp22.json()

            let resp23 = await fetch("https://swapi.dev/api/people/63/")
            let data23 = await resp23.json()

            let resp24 = await fetch("https://swapi.dev/api/people/64/")
            let data24 = await resp24.json()

            let resp25 = await fetch("https://swapi.dev/api/people/67/")
            let data25 = await resp25.json()

            let resp26 = await fetch("https://swapi.dev/api/people/68/")
            let data26 = await resp26.json()

            let resp27 = await fetch("https://swapi.dev/api/people/75/")
            let data27 = await resp27.json()

            let resp28 = await fetch("https://swapi.dev/api/people/78/")
            let data28 = await resp28.json()

            let resp29 = await fetch("https://swapi.dev/api/people/79/")
            let data29 = await resp29.json()

            let resp30 = await fetch("https://swapi.dev/api/people/80/")
            let data30 = await resp30.json()

            let resp31 = await fetch("https://swapi.dev/api/people/81/")
            let data31 = await resp31.json()

            let resp32 = await fetch("https://swapi.dev/api/people/82/")
            let data32 = await resp32.json()

            let resp33 = await fetch("https://swapi.dev/api/people/83/")
            let data33 = await resp33.json()
            setRevengeoftheSith(
                [
                    {
                        name: data.name,
                        homeworld: data.homeworld,
                        hair_color: data.hair_color,
                        height: data.height
                    },
                    {
                        name: data1.name,
                        homeworld: data1.homeworld,
                        hair_color: data1.hair_color,
                        height: data1.height
                    },
                    {
                        name: data2.name,
                        homeworld: data2.homeworld,
                        hair_color: data2.hair_color,
                        height: data2.height
                    },
                    {
                        name: data3.name,
                        homeworld: data3.homeworld,
                        hair_color: data3.hair_color,
                        height: data3.height
                    },
                    {
                        name: data4.name,
                        homeworld: data4.homeworld,
                        hair_color: data4.hair_color,
                        height: data4.height
                    },
                    {
                        name: data5.name,
                        homeworld: data5.homeworld,
                        hair_color: data5.hair_color,
                        height: data5.height
                    },
                    {
                        name: data6.name,
                        homeworld: data6.homeworld,
                        hair_color: data6.hair_color,
                        height: data6.height
                    },
                    {
                        name: data7.name,
                        homeworld: data7.homeworld,
                        hair_color: data7.hair_color,
                        height: data7.height
                    },
                    {
                        name: data8.name,
                        homeworld: data8.homeworld,
                        hair_color: data8.hair_color,
                        height: data8.height
                    },
                    {
                        name: data9.name,
                        homeworld: data9.homeworld,
                        hair_color: data9.hair_color,
                        height9: data.height
                    },
                    {
                        name: data10.name,
                        homeworld: data10.homeworld,
                        hair_color: data10.hair_color,
                        height: data10.height
                    },
                    {
                        name: data11.name,
                        homeworld: data11.homeworld,
                        hair_color: data11.hair_color,
                        height: data11.height
                    },
                    {
                        name: data12.name,
                        homeworld: data12.homeworld,
                        hair_color: data12.hair_color,
                        height: data12.height
                    },
                    {
                        name: data13.name,
                        homeworld: data13.homeworld,
                        hair_color: data13.hair_color,
                        height: data13.height
                    },
                    {
                        name: data14.name,
                        homeworld: data14.homeworld,
                        hair_color: data14.hair_color,
                        height: data14.height
                    },
                    {
                        name: data15.name,
                        homeworld: data15.homeworld,
                        hair_color: data15.hair_color,
                        height: data15.height
                    },
                    {
                        name: data16.name,
                        homeworld: data16.homeworld,
                        hair_color: data16.hair_color,
                        height: data16.height
                    },
                    {
                        name: data17.name,
                        homeworld: data17.homeworld,
                        hair_color: data17.hair_color,
                        height: data17.height
                    },
                    {
                        name: data18.name,
                        homeworld: data18.homeworld,
                        hair_color: data18.hair_color,
                        height: data18.height
                    },
                    {
                        name: data19.name,
                        homeworld: data19.homeworld,
                        hair_color: data19.hair_color,
                        height: data19.height
                    },
                    {
                        name: data20.name,
                        homeworld: data20.homeworld,
                        hair_color: data20.hair_color,
                        height: data20.height
                    },
                    {
                        name: data21.name,
                        homeworld: data21.homeworld,
                        hair_color: data21.hair_color,
                        height: data21.height
                    },
                    {
                        name: data22.name,
                        homeworld: data22.homeworld,
                        hair_color: data22.hair_color,
                        height: data22.height
                    },
                    {
                        name: data23.name,
                        homeworld: data23.homeworld,
                        hair_color: data23.hair_color,
                        height: data23.height
                    },
                    {
                        name: data24.name,
                        homeworld: data24.homeworld,
                        hair_color: data24.hair_color,
                        height: data24.height
                    },
                    {
                        name: data25.name,
                        homeworld: data25.homeworld,
                        hair_color: data25.hair_color,
                        height: data25.height
                    },
                    {
                        name: data26.name,
                        homeworld: data26.homeworld,
                        hair_color: data26.hair_color,
                        height: data26.height
                    },
                    {
                        name: data27.name,
                        homeworld: data27.homeworld,
                        hair_color: data27.hair_color,
                        height: data27.height
                    },
                    {
                        name: data28.name,
                        homeworld: data28.homeworld,
                        hair_color: data28.hair_color,
                        height: data28.height
                    },
                    {
                        name: data29.name,
                        homeworld: data29.homeworld,
                        hair_color: data29.hair_color,
                        height: data29.height
                    },
                    {
                        name: data30.name,
                        homeworld: data30.homeworld,
                        hair_color: data30.hair_color,
                        height: data30.height
                    },
                    {
                        name: data31.name,
                        homeworld: data31.homeworld,
                        hair_color: data31.hair_color,
                        height: data31.height
                    },
                    {
                        name: data32.name,
                        homeworld: data32.homeworld,
                        hair_color: data32.hair_color,
                        height: data32.height
                    },
                    {
                        name: data33.name,
                        homeworld: data33.homeworld,
                        hair_color: data33.hair_color,
                        height: data33.height
                    }
            ]
            )
        }
        getEvento()
    }, []);

    return {
        ANewHope,
        TheEmpireStrikesBack,
        ReturnoftheJedi,
        RevengeoftheSith
    }
}
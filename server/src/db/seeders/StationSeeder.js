import { Station } from "../../models/index.js"

class StationSeeder {
    static async seed() {
        const stationsData = [
            {
                name: "Airport",
                line: "Blue and Silver",
                location: "East Boston",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Outbound_train_leaving_Airport_station%2C_November_2020.jpg/600px-Outbound_train_leaving_Airport_station%2C_November_2020.jpg"
            },
            {
                name: "Alewife",
                line: "Red",
                location: "Cambridge",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Alewife_station_platform_%281%29%2C_November_2019.jpg/600px-Alewife_station_platform_%281%29%2C_November_2019.jpg"
            },
            {
                name: "Allston Street",
                line: "Green",
                location: "Allston",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Inbound_train_at_Allston_Street_station_%282%29%2C_August_2018.JPG/600px-Inbound_train_at_Allston_Street_station_%282%29%2C_August_2018.JPG"
            },
            {
                name: "Amory Street",
                line: "Green",
                location: "Fenway-Kenmore",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Inbound_train_at_Amory_Street_station%2C_December_2021.JPG/600px-Inbound_train_at_Amory_Street_station%2C_December_2021.JPG"
            },
            {
                name: "Andrew",
                line: "Red",
                location: "South Boston",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/MBTA_Andrew_Station%2C_Inbound_Train%2C_August_2021.jpg/600px-MBTA_Andrew_Station%2C_Inbound_Train%2C_August_2021.jpg"
            },
            {
                name: "Aquarium",
                line: "Blue",
                location: "Downtown Boston",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Inbound_train_at_Aquarium_station%2C_July_2019.JPG/600px-Inbound_train_at_Aquarium_station%2C_July_2019.JPG"
            },
            {
                name: "Arlington",
                line: "Green",
                location: "Back Bay",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Outbound_train_at_Arlington_station%2C_July_2019.JPG/600px-Outbound_train_at_Arlington_station%2C_July_2019.JPG"
            },
            {
                name: "Ashmont",
                line: "Red",
                location: "Dorchester",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Inbound_train_at_Ashmont_station%2C_July_2021.jpg/600px-Inbound_train_at_Ashmont_station%2C_July_2021.jpg"
            },
            {
                name: "Assembly",
                line: "Orange",
                location: "Somerville",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Inbound_Orange_Line_train_at_Assembly_station%2C_2_September_2014.JPG/600px-Inbound_Orange_Line_train_at_Assembly_station%2C_2_September_2014.JPG"
            },
            {
                name: "Babacock Street",
                line: "Green",
                location: "Fenway-Kenmore",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Inbound_train_at_Babcock_Street_station%2C_December_2021.JPG/600px-Inbound_train_at_Babcock_Street_station%2C_December_2021.JPG"
            },
            {
                name: "Back Bay",
                line: "Orange",
                location: "Back Bay",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Dartmouth_Street_facade_of_Back_Bay_station%2C_March_2017.JPG/600px-Dartmouth_Street_facade_of_Back_Bay_station%2C_March_2017.JPG"
            },
            {
                name: "Back of the Hill",
                line: "Green",
                location: "Mission Hill",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Back_of_the_Hill_MBTA_station%2C_Boston_MA.jpg/600px-Back_of_the_Hill_MBTA_station%2C_Boston_MA.jpg"
            },
            {
                name: "Ball Square",
                line: "Green",
                location: "Somerville",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Ball_Square_MBTA_Station_Platform%2C_December_2022.jpg/600px-Ball_Square_MBTA_Station_Platform%2C_December_2022.jpg"
            },
            {
                name: "Beachmont",
                line: "Blue",
                location: "Revere/Beachmont",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Outbound_train_at_Beachmont_station%2C_August_2018.JPG/600px-Outbound_train_at_Beachmont_station%2C_August_2018.JPG"
            },
            {
                name: "Beaconsfield",
                line: "Green",
                location: "Brookline",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Beaconsfield_station_from_Dean_Road_steps%2C_November_2015.JPG/600px-Beaconsfield_station_from_Dean_Road_steps%2C_November_2015.JPG"
            },
            {
                name: "Bellingham Square",
                line: "Silver",
                location: "Chelsea/Bellingham Square",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/MBTA_route_SL3_bus_at_Bellingham_Square_station%2C_July_2021.jpg/600px-MBTA_route_SL3_bus_at_Bellingham_Square_station%2C_July_2021.jpg"
            },
            {
                name: "Blandford Street",
                line: "Silver",
                location: "Boston/Fenway-Kenmore",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Blandford_Street_station%2C_September_2013.JPG/600px-Blandford_Street_station%2C_September_2013.JPG"
            },
            {
                name: "Boston College",
                line: "Green",
                location: "Boston/Brighton",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Boston_College_MBTA_station%2C_Brighton_MA.jpg/600px-Boston_College_MBTA_station%2C_Brighton_MA.jpg"
            },
            {
                name: "Boston University Central",
                line: "Green",
                location: "Boston/Fenway-Kenmore",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Outbound_train_at_BU_Central_station%2C_July_2019.JPG/600px-Outbound_train_at_BU_Central_station%2C_July_2019.JPG"
            },
            {
                name: "Boston University East",
                line: "Green",
                location: "Boston/Fenway-Kenmore",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Inbound_train_at_BU_East%2C_July_2019.JPG/600px-Inbound_train_at_BU_East%2C_July_2019.JPG"
            },
            {
                name: "Bowdoin",
                line: "Blue",
                location: "Boston/Beacon Hill",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Westbound_train_at_Bowdoin_station%2C_July_2019.JPG/600px-Westbound_train_at_Bowdoin_station%2C_July_2019.JPG"
            },
            {
                name: "Box District",
                line: "Silver",
                location: "Chelsea",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Box_District_station%2C_July_2021.jpg/600px-Box_District_station%2C_July_2021.jpg"
            },
            {
                name: "Boylston",
                line:"Green and Silver",
                location:"Boston/Downtown",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Type_9_LRVs_at_Boylston_station%2C_December_2019.JPG/600px-Type_9_LRVs_at_Boylston_station%2C_December_2019.JPG"
            },
            {
                name: "BrainTree",
                line:"Red",
                location:"Braintree",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Red_Line_trains_at_Braintree_station_%282%29%2C_August_2018.JPG/600px-Red_Line_trains_at_Braintree_station_%282%29%2C_August_2018.JPG"
            },
            {
                name: "Brandon Hall",
                line:"Green",
                location:"Brookline",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Brandon_Hall%2C_May_2019.jpg/600px-Brandon_Hall%2C_May_2019.jpg"
            },
            {
                name: "Brigham Circle",
                line:"Green",
                location:"Boston/Mission Hill",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/MBTA_3706_at_Brigham_Circle%2C_September_2012.JPG/600px-MBTA_3706_at_Brigham_Circle%2C_September_2012.JPG"
            },
            {
                name: "Broadway",
                line:"Red",
                location:"Boston/South Boston",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/MBTA_Broadway_Station%2C_Inbound_Train%2C_August_2021.jpg/600px-MBTA_Broadway_Station%2C_Inbound_Train%2C_August_2021.jpg"
            },
            {
                name: "Brookline Hills",
                line:"Green",
                location:"Brookline",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Two_trains_at_Brookline_Hills_station%2C_March_2022.JPG/600px-Two_trains_at_Brookline_Hills_station%2C_March_2022.JPG"
            },
            {
                name: "Brookline Village",
                line:"Green",
                location:"Brookline",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Inbound_train_at_Brookline_Village_station%2C_September_2022.jpg/600px-Inbound_train_at_Brookline_Village_station%2C_September_2022.jpg"
            },
            {
                name: "Butler",
                line:"Red",
                location:"Boston/Dorchester",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/MBTA_3262_at_Butler_station%2C_August_2016.JPG/600px-MBTA_3262_at_Butler_station%2C_August_2016.JPG"
            },
            {
                name: "Capen Street",
                line:"Red",
                location:"Milton",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Outbound_streetcar_at_Capen_Street_station%2C_July_2021.jpg/600px-Outbound_streetcar_at_Capen_Street_station%2C_July_2021.jpg"
            },
            {
                name: "Cedar Grove",
                line:"Red",
                location:"Boston/Dorchester",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Streetcar_at_Cedar_Grove_station%2C_August_2018.JPG/600px-Streetcar_at_Cedar_Grove_station%2C_August_2018.JPG"
            },
            {
                name: "Central",
                line:"Red",
                location:"Cambridge/Central Square",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/MBTA_Central_Station%2C_Outbound_Train%2C_August_2021.jpg/600px-MBTA_Central_Station%2C_Outbound_Train%2C_August_2021.jpg"
            },
            {
                name: "Central Avenue",
                line:"Red",
                location:"Milton",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Outbound_streetcar_at_Central_Avenue_station%2C_December_2022.jpg/600px-Outbound_streetcar_at_Central_Avenue_station%2C_December_2022.jpg"
            },
            {
                name: "Charles/MGH",
                line:"Red",
                location:"Boston/West End",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Inbound_train_leaving_Charles_MGH_station%2C_April_2018.jpg/600px-Inbound_train_leaving_Charles_MGH_station%2C_April_2018.jpg"
            },
            {
                name: "Chelsea",
                line:"Green",
                location:"Newton/Chestnut Hill",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/MBTA_route_SL3_buses_at_Chelsea_station%2C_July_2021.jpg/600px-MBTA_route_SL3_buses_at_Chelsea_station%2C_July_2021.jpg"
            },
            {
                name: "Chestnut Hill",
                line:"Green",
                location:"Boston/Brighton",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Inbound_train_at_Chestnut_Hill_station%2C_December_2015.JPG/600px-Inbound_train_at_Chestnut_Hill_station%2C_December_2015.JPG"
            },
            {
                name: "Chestnut Hill Avenue",
                line:"Green",
                location:"Boston/Brighton",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Inbound_train_at_Chestnut_Hill_Avenue%2C_August_2016.JPG/600px-Inbound_train_at_Chestnut_Hill_Avenue%2C_August_2016.JPG"
            },
            {
                name: "Chinatown",
                line:"Orange and Silver",
                location:"Boston/Chinatown",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Northbound_train_at_Chinatown_station%2C_December_2011.jpg/600px-Northbound_train_at_Chinatown_station%2C_December_2011.jpg"
            },
            {
                name: "Chiswick Road",
                line:"Green",
                location:"Boston/Brighton",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Inbound_train_at_Chiswick_Road_station%2C_August_2018.JPG/600px-Inbound_train_at_Chiswick_Road_station%2C_August_2018.JPG"
            },
            {
                name: "Cleveland Circle",
                line:"Green",
                location:"Boston/Brighton",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/MBTA_3664_at_Cleveland_Circle_%282%29%2C_May_2016.JPG/600px-MBTA_3664_at_Cleveland_Circle_%282%29%2C_May_2016.JPG"
            },
            {
                name: "Community College",
                line:"Orange",
                location:"Boston/Charlestown",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Platforms_at_Community_College_station_with_countdown_sign%2C_January_2013.jpg/600px-Platforms_at_Community_College_station_with_countdown_sign%2C_January_2013.jpg"
            },
            {
                name: "Coolidge Corner",
                line:"Green",
                location:"Brookline/Coolidge Corner",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/MBTA_3830_at_Coolidge_Corner_station%2C_February_2017.JPG/600px-MBTA_3830_at_Coolidge_Corner_station%2C_February_2017.JPG"
            },
            {
                name: "Copley",
                line:"Green",
                location:"Boston/Downtown",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Outbound_train_at_Copley_station%2C_July_2019.JPG/600px-Outbound_train_at_Copley_station%2C_July_2019.JPG"
            },
            {
                name: "Courthouse",
                line:"Silver",
                location:"Boston/South Boston",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Courthouse_station_outbound_platform_from_mezzanine%2C_June_2012.JPG/600px-Courthouse_station_outbound_platform_from_mezzanine%2C_June_2012.JPG"
            },
            {
                name: "Davis",
                line:"Red",
                location:"Somerville/Davis Square",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Northbound_train_at_Davis_station%2C_December_2009.jpg/600px-Northbound_train_at_Davis_station%2C_December_2009.jpg"
            },
            {
                name: "Dean Road",
                line:"Green",
                location:"Brookline",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Inbound_train_passing_Dean_Road_station_%282%29%2C_December_2018.JPG/600px-Inbound_train_passing_Dean_Road_station_%282%29%2C_December_2018.JPG"
            },
            {
                name: "Downtown Crossing",
                line: "Orange, Red, and Silver",
                location: "Boston/Downtown",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Northbound_Orange_Line_train_at_Downtown_Crossing_station%2C_December_2018.JPG/600px-Northbound_Orange_Line_train_at_Downtown_Crossing_station%2C_December_2018.JPG"
            },
            {
                name: "East Somerville",
                line: "Green",
                location: "Somerville",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/East_Somerville_MBTA_Station%2C_Inbound%2C_December_2022.jpg/600px-East_Somerville_MBTA_Station%2C_Inbound%2C_December_2022.jpg"
            },
            {
                name: "Eastern Avenue",
                line: "Silver",
                location: "Chelsea",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/MBTA_route_SL3_bus_at_Eastern_Avenue_station%2C_July_2021.jpg/600px-MBTA_route_SL3_bus_at_Eastern_Avenue_station%2C_July_2021.jpg"
            },
            {
                name: "Eliot",
                line: "Green",
                location: "Newton/Newton Upper Falls",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/MBTA_3617_at_Eliot_station%2C_March_2016.JPG/600px-MBTA_3617_at_Eliot_station%2C_March_2016.JPG"
            },
            {
                name: "Englewood Avenue",
                line: "Green",
                location: "Brookline",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/MBTA_3889_at_Englewood_Avenue_station%2C_December_2016.JPG/600px-MBTA_3889_at_Englewood_Avenue_station%2C_December_2016.JPG"
            },
            {
                name: "Fairbanks Street",
                line: "Green",
                location: "Brookline",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/MBTA_3690_at_Fairbanks_station%2C_April_2016.JPG/600px-MBTA_3690_at_Fairbanks_station%2C_April_2016.JPG"
            },
            {
                name: "Fenway",
                line: "Green",
                location: "Boston/Fenway-Kenmore",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Inbound_train_at_Fenway_station%2C_July_2019.JPG/600px-Inbound_train_at_Fenway_station%2C_July_2019.JPG"
            },
            {
                name: "Fenwood Road",
                line: "Green",
                location: "Boston/Mission Hill",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Outbound_train_at_Fenwood_Road%2C_September_2022.jpg/600px-Outbound_train_at_Fenwood_Road%2C_September_2022.jpg"
            },
            {
                name: "Fields Corner",
                line: "Red",
                location: "Boston/Dorchester",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Inbound_train_arriving_at_Fields_Corner_station%2C_July_2021.jpg/600px-Inbound_train_arriving_at_Fields_Corner_station%2C_July_2021.jpg"
            },
            {
                name: "Forest Hills",
                line: "Orange",
                location: "Boston/Jamacia Plain",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Forest_Hills_T_Stop-101.jpg/600px-Forest_Hills_T_Stop-101.jpg"
            },
            {
                name: "Gilman Square",
                line: "Green",
                location: "Somerville",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Gilman_MBTA_Station%2C_Inbound%2C_December_2022.jpg/600px-Gilman_MBTA_Station%2C_Inbound%2C_December_2022.jpg"
            },
            {
                name: "Government Center",
                line: "Blue and Green",
                location: "Boston/Downtown",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Government_Center_station_on_reopening_day%2C_March_2016.jpg/600px-Government_Center_station_on_reopening_day%2C_March_2016.jpg"
            },
            {
                name: "Green Street",
                line: "Orange",
                location: "Boston/Jamaica Plain",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Green_station_facing_inbound%2C_May_2012.JPG/600px-Green_station_facing_inbound%2C_May_2012.JPG"
            },
            {
                name: "Griggs Street/Long Avenue",
                line: "Green",
                location: "Boston/Allston",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Inbound_train_at_Griggs_Street_station%2C_August_2018.JPG/600px-Inbound_train_at_Griggs_Street_station%2C_August_2018.JPG"
            },
            {
                name: "Harvard",
                line: "Red",
                location: "Cambridge/Harvard Square",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/MBTA_Harvard_Station%2C_Upper_Platform%2C_August_2021.jpg/600px-MBTA_Harvard_Station%2C_Upper_Platform%2C_August_2021.jpg"
            },
            {
                name: "Harvard Avenue",
                line: "Green",
                location: "Boston/Allston",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Inbound_train_at_Harvard_Avenue_station%2C_December_2018.JPG/600px-Inbound_train_at_Harvard_Avenue_station%2C_December_2018.JPG"
            },
            {
                name: "Hawes Street",
                line: "Green",
                location: "Brookline",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Inbound_train_at_Hawes_Street_%281%29%2C_August_2016.JPG/600px-Inbound_train_at_Hawes_Street_%281%29%2C_August_2016.JPG"
            },
            {
                name: "Haymarket",
                line: "Orange and Green",
                location: "Boston/Downtown",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Southbound_Green_Line_train_at_Haymarket_station%2C_July_2019.JPG/600px-Southbound_Green_Line_train_at_Haymarket_station%2C_July_2019.JPG"
            },
            {
                name: "Heath Street",
                line: "Green",
                location: "Boston/Jamaica Plain",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Train_at_Heath_Street_station%2C_September_2022.JPG/600px-Train_at_Heath_Street_station%2C_September_2022.JPG"
            },
            {
                name: "Herald Street",
                line: "Silver",
                location: "Boston/Roxbury",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Outbound_shelter_at_Herald_Street_station%2C_March_2015.JPG/600px-Outbound_shelter_at_Herald_Street_station%2C_March_2015.JPG"
            },
            {
                name: "Hynes Convention Center",
                line: "Green",
                location: "Boston/Downtown",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Outbound_train_at_Hynes_Convention_Center_station%2C_July_2019.JPG/600px-Outbound_train_at_Hynes_Convention_Center_station%2C_July_2019.JPG"
            },
            {
                name: "Jackson Square",
                line: "Orange",
                location: "Boston/Jamaica Plain",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Jackson_Square_station_from_the_south%2C_July_2016.jpg/600px-Jackson_Square_station_from_the_south%2C_July_2016.jpg"
            },
            {
                name: "JFK/UMASS",
                line: "Red",
                location: "Boston/Dorchester",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Outbound_Braintree_Branch_train_at_JFK_UMass_station%2C_July_2013.JPG/600px-Outbound_Braintree_Branch_train_at_JFK_UMass_station%2C_July_2013.JPG"
            },
            {
                name: "Kendall/MIT",
                line: "Red",
                location: "Cambridge/Kendall Square",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Outbound_platform_at_Kendall_MIT_station%2C_December_2014.jpg/600px-Outbound_platform_at_Kendall_MIT_station%2C_December_2014.jpg"
            },
            {
                name: "Kenmore",
                line: "Green",
                location: "Boston/Fenway-Kenmore",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Inbound_train_at_Kenmore_station%2C_July_2019.JPG/600px-Inbound_train_at_Kenmore_station%2C_July_2019.JPG"
            },
            {
                name: "Kent Street",
                line: "Green",
                location: "Brookline",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Inbound_train_passing_Kent_Street_outbound_platform%2C_August_2016.JPG/600px-Inbound_train_passing_Kent_Street_outbound_platform%2C_August_2016.JPG"
            },
            {
                name: "Lechmere",
                line: "Green",
                location: "Cambridge/Lechmere",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Northbound_train_at_Lechmere_station%2C_March_2022.jpg/600px-Northbound_train_at_Lechmere_station%2C_March_2022.jpg"
            },
            {
                name: "Lenox Street",
                line: "Silver",
                location: "Boston/Roxbury",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/MBTA_route_SL4_bus_at_Lenox_Street_station%2C_July_2019.JPG/600px-MBTA_route_SL4_bus_at_Lenox_Street_station%2C_July_2019.JPG"
            },
            {
                name: "Longwood",
                line: "Green",
                location: "Brookline",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Outbound_train_at_Longwood_station%2C_March_2022.JPG/600px-Outbound_train_at_Longwood_station%2C_March_2022.JPG"
            },
            {
                name: "Longwood Medical Area",
                line: "Green",
                location: "Boston/Mission Hill",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/MBTA_3706_at_Longwood_Medical_Area_station%2C_September_2012.JPG/600px-MBTA_3706_at_Longwood_Medical_Area_station%2C_September_2012.JPG"
            },
            {
                name: "Magoun Square",
                line: "Green",
                location: "Somerville",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Magoun_Square_MBTA_Station_Overview%2C_December_2022.jpg/600px-Magoun_Square_MBTA_Station_Overview%2C_December_2022.jpg"
            },
            {
                name: "Malden Center",
                line: "Orange",
                location: "Malden",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Malden_Center_station_from_east_busway%2C_February_2009.jpg/600px-Malden_Center_station_from_east_busway%2C_February_2009.jpg"
            },
            {
                name: "Massachusetts Avenue",
                line: "Orange",
                location: "Boston/Fenway-Kenmore",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Outbound_train_at_Massachusetts_Avenue_station%2C_July_2019.JPG/600px-Outbound_train_at_Massachusetts_Avenue_station%2C_July_2019.JPG"
            },
            {
                name: "Mattapan",
                line: "Red",
                location: "Boston/Mattapan",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mattapan_station_from_Neponset_Trail_bridge%2C_August_2018.JPG/600px-Mattapan_station_from_Neponset_Trail_bridge%2C_August_2018.JPG"
            },
            {
                name: "Maverick",
                line: "Blue",
                location: "Boston/East Boston",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Inbound_train_at_Maverick_station%2C_December_2018.JPG/600px-Inbound_train_at_Maverick_station%2C_December_2018.JPG"
            },
            {
                name: "Medford/Tufts",
                line: "Green",
                location: "Medford",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Medford_Tufts_MBTA_Station_Opening_Day.jpg/600px-Medford_Tufts_MBTA_Station_Opening_Day.jpg"
            },
            {
                name: "Melnea Cass Boulevard",
                line: "Silver",
                location: "Boston/Roxbury",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/MBTA_Silver_Line-Melnea_Cass_Bvld_Station.JPG/600px-MBTA_Silver_Line-Melnea_Cass_Bvld_Station.JPG"
            },
            {
                name: "Milton",
                line: "Red",
                location: "Milton",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Outbound_streetcar_at_Milton_station%2C_July_2021.jpg/600px-Outbound_streetcar_at_Milton_station%2C_July_2021.jpg"
            },
            {
                name: "Mission Park",
                line: "Green",
                location: "Boston/Mission Hill",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Outbound_train_at_Mission_Park%2C_September_2022.JPG/600px-Outbound_train_at_Mission_Park%2C_September_2022.JPG"
            },
            {
                name: "Museum of Fine Arts",
                line: "Green",
                location: "Boston/Fenway-Kenmore",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Outbound_train_at_Museum_of_Fine_Arts_station%2C_December_2019.JPG/600px-Outbound_train_at_Museum_of_Fine_Arts_station%2C_December_2019.JPG"
            },
            {
                name: "Newton Centre",
                line: "Green",
                location: "Newton/Newton Centre",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Newton_Centre_station_HDR%2C_March_2016.jpg/600px-Newton_Centre_station_HDR%2C_March_2016.jpg"
            },
            {
                name: "Newton Highlands",
                line: "Green",
                location: "Newton/Newton Highlands",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Inbound_train_at_Newton_Highlands_station%2C_March_2022.JPG/600px-Inbound_train_at_Newton_Highlands_station%2C_March_2022.JPG"
            },
            {
                name: "Newton Street",
                line: "Silver",
                location: "Boston/Roxbury",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Shelters_at_Newton_Street_station%2C_July_2019.JPG/600px-Shelters_at_Newton_Street_station%2C_July_2019.JPG"
            },
            {
                name: "North Qunicy",
                line: "Red",
                location: "Quincy/North Quincy",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/North_Quincy_station_and_TOD_construction_from_the_south%2C_November_2020.jpg/600px-North_Quincy_station_and_TOD_construction_from_the_south%2C_November_2020.jpg"
            },
            {
                name: "North Station",
                line: "Orange and Green",
                location: "Boston/West End",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Northbound_Orange_Line_train_at_North_Station%2C_December_2022.jpg/600px-Northbound_Orange_Line_train_at_North_Station%2C_December_2022.jpg"
            },
            {
                name: "Northeastern University",
                line: "Green Line",
                location: "Boston/Fenway-Kenmore",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Inbound_train_at_Northeastern_station%2C_July_2021.jpg/600px-Inbound_train_at_Northeastern_station%2C_July_2021.jpg"
            },
            {
                name: "Nubian",
                line: "Silver",
                location: "Boston/Roxbury",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Dudley_Square_MBTA_station.jpg/600px-Dudley_Square_MBTA_station.jpg"
            },
            {
                name: "Oak Grove",
                line: "Orange",
                location: "Malden",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Oak_Grove_station_from_commuter_rail_platform_%282%29%2C_September_2022.JPG/600px-Oak_Grove_station_from_commuter_rail_platform_%282%29%2C_September_2022.JPG"
            },
            {
                name: "Orient Heights",
                line: "Blue",
                location: "Boston/East Boston",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Outbound_train_at_Orient_Heights_station%2C_July_2021.jpg/600px-Outbound_train_at_Orient_Heights_station%2C_July_2021.jpg"
            },
            {
                name: "Packards Corner",
                line: "Green",
                location: "Boston/Allston",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Inbound_train_at_Packards_Corner_station%2C_August_2018.JPG/600px-Inbound_train_at_Packards_Corner_station%2C_August_2018.JPG"
            },
            {
                name: "Park Street",
                line: "Red and Green",
                location: "Boston/Downtown",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Southbound_Red_Line_train_leaving_Park_Street_station_%282%29%2C_December_2019.JPG/600px-Southbound_Red_Line_train_leaving_Park_Street_station_%282%29%2C_December_2019.JPG"
            },
            {
                name: "Porter",
                line: "Red",
                location: "Cambridge/Porter Square",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/MBTA_Porter_Station%2C_Lower_Platform_Train%2C_August_2021.jpg/600px-MBTA_Porter_Station%2C_Lower_Platform_Train%2C_August_2021.jpg"
            },
            {
                name: "Prudential",
                line: "Green",
                location: "Boston/Back Bay",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Outbound_train_leaving_Prudential_station%2C_July_2019.JPG/600px-Outbound_train_leaving_Prudential_station%2C_July_2019.JPG"
            },
            {
                name: "Quincy Adams",
                line: "Red",
                location: "Quincy/South Quincy",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Outbound_train_leaving_Prudential_station%2C_July_2019.JPG/600px-Outbound_train_leaving_Prudential_station%2C_July_2019.JPG"
            },
            {
                name: "Quincy Center",
                line: "Red",
                location: "Quincy/Quincy Center",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Big_Red_cars_at_Quincy_Center_station%2C_December_2018.JPG/600px-Big_Red_cars_at_Quincy_Center_station%2C_December_2018.JPG"
            },
            {
                name: "Reservoir",
                line: "Green",
                location: "Boston/Brighton",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Inbound_train_at_Reservoir_station%2C_March_2022.JPG/600px-Inbound_train_at_Reservoir_station%2C_March_2022.JPG"
            },
            {
                name: "Revere Beach",
                line: "Blue",
                location: "Revere",
                imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Outbound_train_at_Revere_Beach_station%2C_July_2021.jpg/600px-Outbound_train_at_Revere_Beach_station%2C_July_2021.jpg"
            },
            {
                name: "Riverside",
                line: "Green",
                location: "Newton/Auburndale",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/MBTA_Green_Line_3907_at_Riverside_station.jpg/600px-MBTA_Green_Line_3907_at_Riverside_station.jpg"
            },
            {
                name: "Riverway",
                line: "Green",
                location: "Boston/Mission Hill",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Inbound_train_and_route_66_bus_at_Riverway_stop%2C_December_2016.JPG/600px-Inbound_train_and_route_66_bus_at_Riverway_stop%2C_December_2016.JPG"
            },
            {
                name: "Roxbury Crossing",
                line: "Orange",
                location: "Boston/Roxbury",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Roxbury_Crossing_headhouse%2C_May_2012.JPG/600px-Roxbury_Crossing_headhouse%2C_May_2012.JPG"
            },
            {
                name: "Ruggles",
                line: "Orange",
                location: "Boston/ Roxbury",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Trains_at_Ruggles_station%2C_July_2021.jpg/600px-Trains_at_Ruggles_station%2C_July_2021.jpg"
            },
            {
                name: "Savin Hill",
                line: "Red",
                location: "Boston/ Dorchester",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Savin_Hill_station_from_bridge%2C_November_2015.JPG/600px-Savin_Hill_station_from_bridge%2C_November_2015.JPG"
            },
            {
                name: "Science Park",
                line: "Green",
                location: "Boston / West End",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Science_Park_station_from_below%2C_June_2017.JPG/600px-Science_Park_station_from_below%2C_June_2017.JPG"
            },
            {
                name: "Shawmut",
                line: "Red",
                location: "Boston/Dorchester",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Shawmut_station_headhouse_from_the_south%2C_August_2016.JPG/600px-Shawmut_station_headhouse_from_the_south%2C_August_2016.JPG"
            },
            {
                name: "Silver Line Way",
                line: "Silver",
                location: "Boston/South Boston",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Silver_Line_Way_station%2C_March_2016.JPG/600px-Silver_Line_Way_station%2C_March_2016.JPG"
            },
            {
                name: "South Station",
                line: "Red and Silver",
                location: "Boston/Downtown",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Northbound_Red_Line_train_at_South_Station%2C_December_2019.JPG/600px-Northbound_Red_Line_train_at_South_Station%2C_December_2019.JPG"
            },
            {
                name: "South Street",
                line: "Green",
                location: "Boston/Brighton",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Inbound_train_at_South_Street_station%2C_March_2022.JPG/600px-Inbound_train_at_South_Street_station%2C_March_2022.JPG"
            },
            {
                name: "St.Mary's Street",
                line: "Green",
                location: "Brookline",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/St._Marys_Street_MBTA_station%2C_Boston_MA.jpg/600px-St._Marys_Street_MBTA_station%2C_Boston_MA.jpg"
            },
            {
                name: "St.Paul Street",
                line: "Green",
                location: "Brookline",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/MBTA_3615_at_St_Paul_Street%2C_August_2016.JPG/600px-MBTA_3615_at_St_Paul_Street%2C_August_2016.JPG"
            },
            {
                name: "State",
                line: "Blue and Orange",
                location: "Boston/Downtown",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Blue_Line_platforms_at_State_station%2C_August_2018.JPG/600px-Blue_Line_platforms_at_State_station%2C_August_2018.JPG"
            },
            {
                name: "Stony Brook",
                line: "Orange",
                location: "Boston/Jamaica Plain",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Stony_Brook_MBTA_station%2C_July_2016.jpg/600px-Stony_Brook_MBTA_station%2C_July_2016.jpg"
            },
            {
                name: "Suffolk Downs",
                line: "Blue",
                location: "Boston/East Boston",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Outbound_train_at_Suffolk_Downs_station%2C_August_2018.JPG/600px-Outbound_train_at_Suffolk_Downs_station%2C_August_2018.JPG"
            },
            {
                name: "Sullivan Square",
                line: "Orange",
                location: "Boston/Charlestown",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Outbound_train_at_Sullivan_Square_station%2C_July_2019.JPG/600px-Outbound_train_at_Sullivan_Square_station%2C_July_2019.JPG"
            },
            {
                name: "Summit Avenue",
                line: "Green",
                location: "Brookline",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Summit_Avenue_MBTA_station%2C_Brookline_MA.jpg/600px-Summit_Avenue_MBTA_station%2C_Brookline_MA.jpg"
            },
            {
                name: "Sutherland Road",
                line: "Green",
                location: "Boston/Brighton",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/MBTA_3828_at_Sutherland_Road_stop%2C_April_2017.JPG/600px-MBTA_3828_at_Sutherland_Road_stop%2C_April_2017.JPG"
            },
            {
                name: "Symphony",
                line: "Green",
                location: "Boston/Fenway-Kenmore",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Outbound_train_at_Symphony_station%2C_December_2019.JPG/600px-Outbound_train_at_Symphony_station%2C_December_2019.JPG"
            },
            {
                name: "Tappan Street",
                line: "Green",
                location: "Brookline",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Outbound_train_at_Tappan_Street%2C_April_2016.JPG/600px-Outbound_train_at_Tappan_Street%2C_April_2016.JPG"
            },
            {
                name: "Tufts Medical Center",
                line: "Orange and Silver",
                location: "Boston/Chinatown",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Tufts_Medical_Center_platforms.JPG/600px-Tufts_Medical_Center_platforms.JPG"
            },
            {
                name: "Union Park Street",
                line: "Silver",
                location: "Boston/Roxbury",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/MBTA_route_SL5_bus_at_Union_Park_Street%2C_July_2019.JPG/600px-MBTA_route_SL5_bus_at_Union_Park_Street%2C_July_2019.JPG"
            },
            {
                name: "Union Square",
                line: "Green",
                location: "Somerville",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Train_arriving_at_Union_Square_station%2C_March_2022.JPG/600px-Train_arriving_at_Union_Square_station%2C_March_2022.JPG"
            },
            {
                name: "Valley Road",
                line: "Red",
                location: "Milton",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Valley_Road_station_facing_inbound%2C_March_2016.JPG/600px-Valley_Road_station_facing_inbound%2C_March_2016.JPG"
            },
            {
                name: "Waban",
                line: "Green",
                location: "Newton/Waban",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Outbound_train_at_Waban_station%2C_March_2022.JPG/600px-Outbound_train_at_Waban_station%2C_March_2022.JPG"
            },
            {
                name: "Warren Street",
                line: "Green",
                location: "Boston/Brighton",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Outbound_train_passing_inbound_platform_at_Warren_Street_station%2C_August_2018.JPG/600px-Outbound_train_passing_inbound_platform_at_Warren_Street_station%2C_August_2018.JPG"
            },
            {
                name: "Washington Square",
                line: "Green",
                location: "Brookline",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Inbound_train_at_Washington_Square_station%2C_April_2016.JPG/600px-Inbound_train_at_Washington_Square_station%2C_April_2016.JPG"
            },
            {
                name: "Washington Street",
                line: "Green",
                location: "Brookline",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Washington_Street_station_facing_inbound%2C_August_2016.JPG/600px-Washington_Street_station_facing_inbound%2C_August_2016.JPG"
            },
            {
                name: "Wellington",
                line: "Orange",
                location: "Medford",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Outbound_train_at_Wellington_station%2C_January_2013.jpg/600px-Outbound_train_at_Wellington_station%2C_January_2013.jpg"
            },
            {
                name: "Wollaston",
                line: "Red",
                location: "Quincy/Wollaston",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Inbound_train_leaving_Wollaston_station%2C_November_2020.jpg/600px-Inbound_train_leaving_Wollaston_station%2C_November_2020.jpg"
            },
            {
                name: "Wonderland",
                line: "Blue",
                location: "Revere",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Wonderland_station%2C_July_2012.jpg/600px-Wonderland_station%2C_July_2012.jpg"
            },
            {
                name: "Wood Island",
                line: "Blue",
                location: "Boston/East Boston",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Outbound_train_at_Wood_Island_station%2C_July_2021.jpg/600px-Outbound_train_at_Wood_Island_station%2C_July_2021.jpg"
            },
            {
                name: "Woodland",
                line: "Green",
                location: "Newton/Newton Lower falls",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/MBTA_3619_at_Woodland_station%2C_May_2016.JPG/600px-MBTA_3619_at_Woodland_station%2C_May_2016.JPG"
            },
            {
                name: "Worcester Square",
                line: "Silver Line",
                location: "Boston/Roxbury",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/MBTA_route_SL5_bus_at_Worcester_Square%2C_July_2019.JPG/600px-MBTA_route_SL5_bus_at_Worcester_Square%2C_July_2019.JPG"
            },
            {
                name: "World Trade Center",
                line: "Silver",
                location: "Boston/South Boston",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/MBTA_route_SL2_bus_at_World_Trade_Center_station%2C_December_2019.JPG/600px-MBTA_route_SL2_bus_at_World_Trade_Center_station%2C_December_2019.JPG"
            }
        ]
        for (const singleStationData of stationsData) {
            const currentStation = await Station.query().findOne({ name: singleStationData.name })
            if(!currentStation){
                await Station.query().insert(singleStationData)
            }
        }
    }
}

export default StationSeeder
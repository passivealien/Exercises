/* eslint-disable @typescript-eslint/no-unused-vars */
//import React from 'react';
// let str = '\u{1f600}\u{00fa}é';
// for (const ch of str) {
//     console.log(ch);
// }
//============================================
// let x = 555;
// let evaluatedTemplate = `${x} === 555 is ${x === 555}`;
// console.log(evaluatedTemplate)
// // evaluatedTemplate becomes "555 === 555 is true"
// let y = '555';
// let evaluatedTemplate2 = `${y} === 555 is ${y === 555}`;    
// console.log(evaluatedTemplate2)
// // evaluatedTemplate becomes "555 === 555 is false"

//======================================
// let emulatedSubs = '${sub1}abc ${sub2} def${sub3}'
// .split( /\${\w*}/ );
// console.log(emulatedSubs)
//======================================
// let sub1=1, sub2=2, sub3 = 3;
// ( (x, ...subs) => {
// console.log( x, ...subs );
// })`${sub1}abc ${sub2} def${sub3}`
// //=======================================
// let salutation = literalFragments =>
// 'Hello, ' + literalFragments[0]
// console.log( salutation`Ashley` );
//======================================    
// let price = 5999.9;
// let currencySymbol = '€';
// let productName = 'Titanium Toothbrush';
// let formatCurrency = function( currency, amount ) {
//     return amount.toFixed(2) + currency;
// }
// let format = (textArray, ...substitutions) => {
//     let template = textArray[0];
//     template += substitutions[0];
//     template += textArray[1];
//     template += formatCurrency( substitutions[1], substitutions[2] );
//     template += textArray[3];
//     return template;
// };

// format`
// <div class="js-product">
// Product: ${productName}
// </div>
// <div class="js-price">
// Price: ${currencySymbol}${price}
// </div>
// `
// <div class="js-product">
// Product: Titanium Toothbrush
// </div>
// <div class="js-price">
// Price: 5999.90€
// </div>
//==================================

import React from 'react'

const Display = () => {
    let departures = [
        {
            id : 'KL 1255',
            destination : 'Amsterdam',
            departureTime : '21:55',
            gate : 'A13',
        },
        {
            id : 'OK 001',
            destination : 'Prague',
            departureTime : '20:40',
            gate : 'A13',
            status : 'Check-in'
        },
        {
            id : '4U 2011',
            destination : 'Stuttgart',
            departureTime : '20:35',
            gate : 'A11',
            status : 'Check-in'
        },
        {
            id : 'LX 911',
            destination : 'Zurich',
            departureTime : '20:15',
            expectedDepartureTime : '21:15',
            status : 'check-in'
        },
        {
            id : 'OS 133',
            destination : 'Vienna',
            departureTime : '19:25',
            gate : 'A06',
            status : 'Departed'
        }
    ];

    let headers = {
        id : 'Id',
        destination : 'Destination',
        departureTime : 'DepartureTime',
        expectedDepartureTime : 'Expected Departure Time',
        gate : 'Gate',
        status : 'Status'
        }
    //=========================================================
    let tableHeader = 
        ` 
        <tr>
        <th>${ headers.id }</th>
        <th>${ headers.destination }</th>
        <th>${ headers.departureTime }</th>
        <th>${ headers.expectedDepartureTime }</th>
        <th>${ headers.gate }</th>
        <th>${ headers.status }</th>
        </tr> `;
        let departure = departures[0];

    let tableRow = `
        <tr>
        <td>${ departure.id }</td>
        <td>${ departure.destination }</td>
        <td>${ departure.departureTime }</td>
        <td>${ departure.expectedDepartureTime }</td>
        <td>${ departure.gate }</td>
        <td>${ departure.status }</td>
        </tr>
    `;
        
    let testTable = `<table>${ tableHeader }${ tableRow }</table>`;
        //========================================
    let defaults = {
        destination : '-',
        departureTime : '-',
        gate : '-',
        status : '-',
        expectedDepartureTime : '-'
    };
            
    let presentedDepartures = departures.map( departure =>Object.assign( {}, defaults, departure ) );

    let tableRows = presentedDepartures.map( departure => `
        <tr>
        <td>${ departure.id }</td>
        <td>${ departure.destination }</td>
        <td>${ departure.departureTime }</td>
        <td>${ departure.expectedDepartureTime }</td>
        <td>${ departure.gate }</td>
        <td>${ departure.status }</td>
        </tr>
    ` ).join( '' );
        
    let table = `<table>${ tableHeader }${ tableRows }</table>`;
            
    const tableRowData = `<table>
        <tr>
            <th>${ headers.id }</th>
            <th>${ headers.destination }</th>
            <th>${ headers.departureTime }</th>
            <th>${ headers.expectedDepartureTime }</th>
            <th>${ headers.gate }</th>
            <th>${ headers.status }</th>
        </tr>
        ${ presentedDepartures.map( departure => `
        <tr>
            <td>${ departure.id }</td>
            <td>${ departure.destination }</td>
            <td>${ departure.departureTime }</td>
            <td>${ departure.expectedDepartureTime }</td>
            <td>${ departure.gate }</td>
            <td>${ departure.status }</td>
        </tr>
        ` ).join( '' ) }
    </table>`;
    return (
    <div>
            {tableRowData   }
    </div>)
}
export default Display

// let firstName = "Hello"
// let lastName = "World"

// console.log(`Hello ${firstName} ${lastName}!`)

// import React, { Component } from 'react';
// import './table.css'
// const data = [
//         {
//             id : 'KL 1255',
//             destination : 'Amsterdam',
//             departureTime : '21:55',
//             gate : 'A13',
//         },
//         {
//             id : 'OK 001',
//             destination : 'Prague',
//             departureTime : '20:40',
//             gate : 'A13',
//             status : 'Check-in'
//         },
//         {
//             id : '4U 2011',
//             destination : 'Stuttgart',
//             departureTime : '20:35',
//             gate : 'A11',
//             status : 'Check-in'
//         },
//         {
//             id : 'LX 911',
//             destination : 'Zurich',
//             departureTime : '20:15',
//             expectedDepartureTime : '21:15',
//             status : 'check-in'
//         },
//         {
//             id : 'OS 133',
//             destination : 'Vienna',
//             departureTime : '19:25',
//             gate : 'A06',
//             status : 'Departed'
//         }
//     ]
//     let headers = {
//             id : 'Id',
//             destination : 'Destination',
//             departureTime : 'DepartureTime',
//             expectedDepartureTime : 'Expected Departure Time',
//             gate : 'Gate',
//             status : 'Status'
//             }
    
// class table extends Component{
//   render(){
//     return ( 
//         <table>
//         <tr>
//           <th>Id</th>
//           <th>Destination</th>
//           <th>DepartureTime</th>
//           <th>Expected Departure Time</th>
//           <th>Gate</th>
//           <th>Status</th>
//         </tr>
//         {data.map((val, key) => {
//           return (
//             <tr key={key}>
//               <td>`${val.id} %`</td>
//               <td>{val.destination}</td>
//               <td>{val.departureTime}</td>
//               <td>{val.expectedDepartureTime}</td>
//               <td>{val.gate}</td>
//               <td>{val.status}</td>
//             </tr>
//           )
//         })}
//       </table>
//     )
//   }
// }

// export default table;


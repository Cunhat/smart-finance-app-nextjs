import React, { useState, useEffect } from 'react';

export function Tree({ data }) {
  console.log(data)


  return (
    <div>
      {data.map((elem) => { return <>
        <h1>{elem.name}</h1>
        {elem.subCategories.map((subCategory) => <h2>{subCategory.name}</h2>)}
        </>})}
    </div>
  );
}

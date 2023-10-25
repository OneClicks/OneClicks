import React from 'react'
import LoginComponent from '@/components/LoginComponent/LoginComponent'

function login() {
  return (
    <LoginComponent/>
    )
}
export async function getServerSideProps() {
  return {
    props: {
      hideHeaderFooter: true,
    },
  };
}

export default login

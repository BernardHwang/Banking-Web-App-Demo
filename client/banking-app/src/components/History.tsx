import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import '../style/components/History.css';


const History = () => {
  const supabaseUrl = 'https://chlwpnxukledzhymqioe.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNobHdwbnh1a2xlZHpoeW1xaW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMTk4ODgsImV4cCI6MjA1MTg5NTg4OH0.wBwXn3XpQTrbOQFe7t0v76eCUYwSvkiUmPdnmPTK5HU'
  const supabase = createClient(supabaseUrl, supabaseKey)

  const [ trx, setTrx ] = useState<any[] | null>([])

  useEffect(() => {
    getTrx();
    console.log(trx)
  }, [])

  const getTrx = async () => {
    const { data, error } = await supabase.from('trxhistory').select('*')
    setTrx(data)
  }

  return (
    <div className='dashboard-container'>
      <h1>Transaction History</h1>
      <table>
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Name</th>
            <th>Transfer Type</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {trx?.map((data) => (
            <tr>
              <td>
                {new Date(data.timestamp).toLocaleString('en-MY', {
                  dateStyle: 'short',
                  timeStyle: 'short',
                })}
              </td>
              <td>{data.bene_name}</td>
              <td>{data.transfer_type}</td>
              <td>{data.amount}</td>
              <td>{data.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{width:'25%', margin: '0 auto 20px auto'}}>
        <button onClick={() => {window.print()}}>
          Print Statement
        </button>
      </div>
    </div>
  )
}

export default History;
import React, { lazy, Suspense, useState } from 'react';

const UserForm = lazy(() => import('./store/user'));

export default function Lazy() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Form</h1>
        <button onClick={() => setShow(true)}>OPEN</button>
      </div>
      {
        show && (
          <Suspense fallback={<div>Loading...</div>}>
            <UserForm></UserForm>
          </Suspense>
        )
      }
    </>
  );
}

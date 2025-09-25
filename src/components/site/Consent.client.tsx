'use client';
import { useEffect, useState } from 'react';

export function ConsentBanner() {
  const [visible, setVisible] = useState<boolean>(false);
  const [consented, setConsented] = useState<boolean>(false);

  useEffect(() => {
    const c = window.localStorage.getItem('consent-analytics');
    if (c === 'granted') {
      setConsented(true);
      loadAnalytics();
    } else if (c === 'denied') {
      setConsented(false);
    } else {
      setVisible(true);
    }
  }, []);

  function loadAnalytics() {
    if (document.getElementById('analytics-script')) return;
    const s = document.createElement('script');
    s.id = 'analytics-script';
    s.defer = true;
    s.textContent = '/* placeholder analytics */';
    document.body.appendChild(s);
  }

  function accept() {
    window.localStorage.setItem('consent-analytics', 'granted');
    setVisible(false);
    setConsented(true);
    loadAnalytics();
  }
  function deny() {
    window.localStorage.setItem('consent-analytics', 'denied');
    setVisible(false);
    setConsented(false);
  }

  if (!visible) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="container-site">
        <div className="mb-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg flex items-center justify-between gap-4">
          <p className="text-sm text-neutral-700">
            Nous utilisons des cookies de mesure d’audience. Acceptez-vous ?
          </p>
          <div className="flex gap-2">
            <button onClick={deny} className="px-3 py-1.5 rounded border">
              Refuser
            </button>
            <button onClick={accept} className="px-3 py-1.5 rounded bg-black text-white">
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

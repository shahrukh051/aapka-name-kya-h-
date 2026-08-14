export default function Flowline({
  id = 'flowGrad',
  d = 'M0,32 C 220,10 340,54 640,32 C 940,10 1060,54 1280,32',
  color = '#0E5B46',
}) {
  return (
    <svg className="flowline" viewBox="0 0 1280 64" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8BDDD1" stopOpacity="0" />
          <stop offset="50%" stopColor={color} stopOpacity="0.75" />
          <stop offset="100%" stopColor="#8BDDD1" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path style={{ stroke: `url(#${id})` }} d={d} />
      <circle className="pulse" r="3" style={{ offsetPath: `path('${d}')` }}></circle>
    </svg>
  )
}

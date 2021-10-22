export default function (req: any, res: any, next: any) {
  res.setHeader('Content-Security-Policy', "default-src 'self' fonts.googleapis.com fonts.gstatic.com style-src 'self'")
  res.setHeader('Expect-CT', 'report-uri="mail:mvn@devpod.dk", enforce, max-age=86400')
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  next()
}
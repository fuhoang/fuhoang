import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-panel py-10">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-muted">
          <div>© {new Date().getFullYear()} Fu Hoang</div>
          <div className="flex gap-5">
            <a className="hover:text-slate-100 transition" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

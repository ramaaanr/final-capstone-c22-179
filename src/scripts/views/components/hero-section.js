/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <img src="../public/hero/hero.svg" alt="" className="hero-image" />
      <div className="hero-content d-flex flex-column p-4">
        <h1 className="hero-content__heading text-center text-primary-dark py-1">
          Lorem, ipsum dolor sit amet consectetur
          adipisicing
          elit.
          Repudiandae, autem.
        </h1>
        <button type="button" id="button-sign-in" className="btn btn-primary">
          <Link to="/sign-up">
            ayo mulai
          </Link>
        </button>
        <button type="button" id="button-sign-up" className="btn btn-secondary">sudah punya akun?</button>
      </div>
    </section>
  );
}
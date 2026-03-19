import React from 'react';

export const HeroUltra = () => (
    <div dangerouslySetInnerHTML={{
        __html: `
<section class="b-hero-ultra" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: radial-gradient(circle at center, #1a1a2e 0%, #0f0f1a 100%); color: white; position: relative; overflow: hidden;">
    <div class="b-container" style="text-align: center; z-index: 10;">
        <h1 style="font-size: 5rem; letter-spacing: -2px; margin-bottom: 20px; font-weight: 800; background: linear-gradient(90deg, #00f2fe 0%, #4facfe 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Beyond The Future</h1>
        <p style="font-size: 1.25rem; opacity: 0.8; max-width: 600px; margin: 0 auto 40px;">Experience the world's most advanced design intelligence layer. Fast, accessible, and breathtakingly beautiful.</p>
        <button class="b-btn b-magnetic" style="padding: 15px 40px; border-radius: 50px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; cursor: pointer; backdrop-filter: blur(10px); transition: all 0.3s ease;">Get Started</button>
    </div>
</section>
` }} />
);

export const NavbarUltra = () => (
    <div dangerouslySetInnerHTML={{
        __html: `
<nav class="b-navbar-ultra" style="position: relative; padding: 20px 0; z-index: 1000; background: rgba(15, 15, 26, 0.8); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255,255,255,0.05);">
    <div class="b-container" style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 20px;">
        <div class="b-brand" style="font-weight: 800; font-size: 1.5rem; color: white;">Bismillah<span style="color: #00f2fe;">CSS</span></div>
    </div>
</nav>
` }} />
);

export const FeatureCardsUltra = () => (
    <div dangerouslySetInnerHTML={{
        __html: `
<section class="b-feature-cards" style="padding: 100px 20px; background: #0f0f1a;">
    <div class="b-container" style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
        <div class="b-card b-spotlight" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 40px; border-radius: 20px;">
            <h3 style="color: white; font-size: 1.5rem; margin-top: 0;">Spatial Logic</h3>
        </div>
    </div>
</section>
` }} />
);

export const SidebarUltra = () => (
    <div dangerouslySetInnerHTML={{
        __html: `
<aside class="b-sidebar-ultra" style="width: 280px; min-height: 400px; background: #151522; border-right: 1px solid rgba(255,255,255,0.05); padding: 30px;">
    <div class="b-brand" style="color: white; font-weight: bold; font-size: 1.2rem; margin-bottom: 40px;">Bismillah System</div>
</aside>
` }} />
);

export const DashboardUltra = () => (
    <div dangerouslySetInnerHTML={{
        __html: `
<div class="b-dashboard-ultra" style="display: grid; grid-template-columns: 280px 1fr; min-height: 400px; background: #0f0f1a; color: white;">
    <main style="padding: 40px;">
        <h1 style="margin: 0;">Command Center</h1>
    </main>
</div>
` }} />
);

export const GlowButtonsUltra = () => (
    <div dangerouslySetInnerHTML={{
        __html: `
<div class="b-glow-buttons" style="padding: 50px; display: flex; gap: 20px; justify-content: center; background: #0f0f1a;">
    <button class="b-btn b-glow" style="position: relative; padding: 15px 40px; font-size: 1rem; font-weight: bold; color: white; background: #111; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; cursor: pointer; box-shadow: 0 0 20px rgba(0,242,254,0.2);">
        Initialize Core
    </button>
</div>
` }} />
);

export const PricingUltra = () => (
    <div dangerouslySetInnerHTML={{
        __html: `
<section class="b-pricing-ultra" style="padding: 100px 20px; background: #050507; color: white;">
    <div class="b-container" style="max-width: 1200px; margin: 0 auto;">
        <div class="bismillah-pricing-ultra">
            <h3>Pro Tier</h3>
            <div class="price">$49</div>
        </div>
    </div>
</section>
` }} />
);

export const TableUltra = () => (
    <div dangerouslySetInnerHTML={{
        __html: `
<div class="b-table-container" style="padding: 40px; background: #0a0a0c;">
    <table class="bismillah-table-ultra">
        <thead>
            <tr><th>System</th><th>Status</th></tr>
        </thead>
        <tbody>
            <tr><td>Core Engine</td><td>Online</td></tr>
        </tbody>
    </table>
</div>
` }} />
);

export const GlassButtonUltra = () => (
    <div dangerouslySetInnerHTML={{ __html: `<button class="bismillah-btn-glass">Glass Primary</button>` }} />
);

export const BadgeNeonUltra = () => (
    <div dangerouslySetInnerHTML={{ __html: `<span class="bismillah-badge-neon">System Active</span>` }} />
);

export const CyberInputUltra = () => (
    <div dangerouslySetInnerHTML={{ __html: `<input type="text" class="bismillah-input-cyber" placeholder="Neural id...">` }} />
);

export const GradientCardUltra = () => (
    <div dangerouslySetInnerHTML={{ __html: `<div class="b-card-gradient">Gradient Card Content</div>` }} />
);

export const AuroraBgElite = () => (
    <div dangerouslySetInnerHTML={{ __html: `<div class="bismillah-aurora-bg" style="min-height: 200px;"></div>` }} />
);

export const TooltipCyberElite = () => (
    <div dangerouslySetInnerHTML={{ __html: `<span class="bismillah-tooltip-cyber" data-tooltip="Neural Secure">Hover for Info</span>` }} />
);

export const InputEliteUltra = () => (
    <div dangerouslySetInnerHTML={{ __html: `<div class="bismillah-input-container-elite"><input class="bismillah-input-elite"><div class="bismillah-input-elite-border"></div></div>` }} />
);

export const CardFloatElite = () => (
    <div dangerouslySetInnerHTML={{ __html: `<div class="bismillah-card-float">Floating Card</div>` }} />
);

export const CardRoyalElite = () => (
    <div dangerouslySetInnerHTML={{ __html: `<div class="bismillah-card-royal"><h2 class="bismillah-text-silk">Majesty</h2></div>` }} />
);

export const RoyalSilkButton = () => (
    <div dangerouslySetInnerHTML={{ __html: `<button class="bismillah-btn-royal">Imperial</button>` }} />
);

export const CardPrismElite = () => (
    <div dangerouslySetInnerHTML={{ __html: `<div class="bismillah-card-prism">Prism Architecture</div>` }} />
);

export const ProgressVaporElite = () => (
    <div dangerouslySetInnerHTML={{
        __html: `
<div style="padding: 40px; background: #0a0a0c;">
    <div class="bismillah-progress-vapor">
        <div class="bismillah-progress-vapor-bar"></div>
    </div>
</div>
` }} />
);

export const CardVaporElite = () => (
    <div dangerouslySetInnerHTML={{
        __html: `
<div style="padding: 60px; background: #0a0a0c; display: flex; justify-content: center;">
    <div class="bismillah-card-vapor" style="max-width: 350px;">
        <h3 style="color: white; margin-top: 0;">Ethereal Logic</h3>
        <p style="color: rgba(255,255,255,0.4);">Lightweight design language.</p>
        <button class="bismillah-btn-vapor">Initiate Phase</button>
    </div>
</div>
` }} />
);

import hexToRgb from './hexToRgb';

export default function getStyleSheet(settings) {
  if (!Object.keys(settings).length) {
    throw new Error('Missing stylesheet config');
  }

  // Compute text shadow css property from HEX code and Opacity into RGBA
  const shadowColor = hexToRgb(settings.textShadowColor);
  const textShadow = ''
  + settings.textShadowX + 'px '
  + settings.textShadowY + 'px '
  + settings.textShadowBlur + 'px '
  + `rgba(${shadowColor.r},${shadowColor.g},${shadowColor.b},${settings.textShadowOpacity/100})`;

  // Compute title position properties depending on alignment
  let titlePosition;
  if (settings.titleVerticalAlign === 'top') {
    titlePosition = 'top: 0;';
  } else if (settings.titleVerticalAlign === 'bottom') {
    titlePosition = 'bottom: 0;';
  } else if (settings.titleVerticalAlign === 'middle') {
    titlePosition = 'top: 50%;\ntransform: translateY(-50%);';
  }

  return `
  ${settings.backgroundImage ? `
  body {
    background-image: url(${settings.backgroundImage}) !important;
    background-size: cover !important;
    background-position: center !important;
  }

  h1, h2, h3, h4, h5, p {
    color: ${settings.titleColor};
  }
  ` : ''}

  ${settings.backgroundImageLarge ? `
  @media (min-width: 1500px) {
    body {
      background-size: cover;
      background-position: center;
      background-image: url(${settings.backgroundImageLarge});
    }
  }
  ` : ''}

  .column {
    width: ${100/settings.columns}%;
    float: left;
  }

  .list-item {
    padding: ${settings.itemSpacing}px;
  }

  .list-item-content {
    height: ${settings.itemSize}px;
    position: relative;
    border-radius: ${settings.itemBorderRadius}px;
    border: ${settings.itemBorderSize}px solid ${settings.itemBorderColor};
    overflow: hidden;
  }

  .list-item-content h1 {
    position: absolute;
    ${titlePosition}
    width: 100%;
    color: #fff;
    margin: 0;
    padding: ${settings.titlePadding}px;
    font-size: ${settings.fontSize}px;
    font-weight: ${settings.fontWeight};
    text-shadow: ${textShadow};
    text-align: ${settings.titleHorizontalAlign};
    z-index: 3;
  }

  .list-item-content .overlay {
    background-color: ${settings.overlayColor};
    opacity: ${settings.overlayOpacity/100};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  .image-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    z-index: 1;
  }
  `;
}


export default function getDefaultSettings() {
  return {
    layout: 'image',
    columns: 2,

    itemSize: 150,
    itemSpacing: 10,
    itemBorderRadius: 10,
    itemBorderSize: 0,
    itemBorderColor: '#000000',

    showOverlay: true,
    overlayColor: '#000000',
    overlayOpacity: 30,

    showTitles: true,
    fontSize: 26,
    fontWeight: 400,
    titleVerticalAlign: 'top',
    titleHorizontalAlign: 'left',
    titlePadding: 10,
    textShadowX: 1,
    textShadowY: 2,
    textShadowColor: '#000000',
    textShadowOpacity: 60,
    textShadowBlur: 2,

    imagePosition: 'background',
    backgroundImage: '',
    backgroundImageLarge: ''
  };
}

const $ = window.$;

/* Run script only after page is done loading */
$(document).ready(() => {
  /* get all input tags */
  const checkboxes = $('input[type=checkbox]');
  /* amenities h4 */
  const preferences = $('.preferences');
  /* list to hold the amenity id(s) */
  const amenityIds = [];
  /* list to hold the aminities to be added to the h4 .preferences */
  const addToH4 = [];

  /* detect change on checkbox */
  $(checkboxes).change(() => {
    /* iterate through the list of inputs */
    $(checkboxes).each((index) => {
      /* add to AmenityIds list and addToH4 list && remove from AmenityIds list and remove from addToH4 list */
      if ($(checkboxes[index]).prop('checked') && amenityIds.indexOf($(checkboxes[index]).attr('data-id')) === -1 && addToH4.indexOf($(checkboxes[index]).attr('data-name')) === -1) {
        amenityIds.push($(checkboxes[index]).attr('data-id'));
        addToH4.push($(checkboxes[index]).attr('data-name'));
        console.log(addToH4);
      } else if ($(checkboxes[index]).prop('checked') === false && amenityIds.indexOf($(checkboxes[index]).attr('data-id')) > -1 && addToH4.indexOf($(checkboxes[index]).attr('data-name')) > -1) {
        amenityIds.splice(index, 1);
        addToH4.splice(addToH4.indexOf(addToH4[index]), 1);
        console.log(addToH4);
      }

      /* concatinate all preferences in addToH4 as string */
      let str = '';
      $(addToH4).each((i) => {
        str = str + ' ' + addToH4[i] + ',';
      });

      /* change the amenity h4 text */
      preferences.text(str);
    });
  });
});

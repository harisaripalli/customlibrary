(function ($) {

    $.fn.inputField = function (options) {

        var fieldId = "inputField1";
        var fieldLabel = "Give your input";

        var settings = $.extend({
            id: fieldId,
            labelName: fieldLabel
        }, options);

        var mdForm = $('<div/>', {
            class: 'md-form'
        });

        var inputField = $('<input />', {
            class: 'form-control',
            type: 'text',
            id: settings.id,
            name: settings.id
        });

        var labelinputField = $('<label />', {
            for: settings.id,
            html: settings.labelName,
        });

        mdForm.append(inputField, labelinputField);

        return this.append(mdForm);

    };

}(jQuery));


'use strict';

module.exports = {
  baseResponseSuccess: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'string' },
  },
};

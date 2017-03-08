<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

/** Local development credentials */
    
$dbName = 'genipack_752y';
$dbUser = 'genipack_752y';
$dbPassword = 'Develop100%';
$dbHost = '10.169.0.127';
define('WP_HOME','http://geni-packaging.com/wordpress/');
define('WP_SITEURL','http://geni-packaging.com/wordpress/');    


// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', $dbName);

/** MySQL database username */
define('DB_USER', $dbUser);

/** MySQL database password */
define('DB_PASSWORD', $dbPassword);

/** MySQL hostname */
define('DB_HOST', $dbHost);

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'uOjHYBXlvV67GcTbW8jstBFMek48FUJ9jTzddHzGbU1J8dSQ1gxbDgDgGV6icWcK');
define('SECURE_AUTH_KEY',  'MUcuEy2mo0MhceXtgCapDJwI6bPub8lUHdfdyokODqo38CnfmDIYz6lEY0J5AYZb');
define('LOGGED_IN_KEY',    '0CzcLVjPXBgALDHRKTWDJoZX3IiNgXvpfXBxISv8ArlSRG9tpJhX1HLaEAHSc3b9');
define('NONCE_KEY',        '4HpjDIeL54P7TD2N6JRAeB2zJLSJt1f1HGbcd1MnDUjwuxLogYs8lMqo19iGYc9U');
define('AUTH_SALT',        'M9DxCNRDAdsSN2gdIHNzsV4JNUfrXgXDuLThWZSlQj2CbIoHJvUdhn7qCiYoox2z');
define('SECURE_AUTH_SALT', 'qrCNnFldcksc4dBCZn2bJ9aSgTelAbzoJIjrsjp06WDr225SzguQOFfFGwlC4MIK');
define('LOGGED_IN_SALT',   'CdFkf2RutljQ4KMdOCysuaYS3KcG5foWfw9zk0fu4puwpQyQyYASvFJGwOW48FgY');
define('NONCE_SALT',       'SvRXA8wYhXDsP8zkGCWwSNHB5ySQhlASqRNMzyarKabpQr1zf9RKRIbu5WEClt5V');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'rsrr_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

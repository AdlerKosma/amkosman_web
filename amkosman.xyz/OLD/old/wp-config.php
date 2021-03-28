<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'amkosman_xyz');

/** MySQL database username */
define('DB_USER', 'amkosman_xyz');

/** MySQL database password */
define('DB_PASSWORD', 'PQx4Tmde');

/** MySQL hostname */
define('DB_HOST', 'amkosman.xyz.mysql.service.one.com');

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
define('AUTH_KEY',         'e4fjyx1kK-4uLdRjBjlwf_qQoco812FirZj2PVoozHs=');
define('SECURE_AUTH_KEY',  '4mMaSEUhA-Pxu-78r78MKX1ej21ldMWqsK5ekLPxmoU=');
define('LOGGED_IN_KEY',    'tnSCwcqeSlt3dCCewwmq4epkEHtiXjrmcZC2MbbAKnE=');
define('NONCE_KEY',        'nfR0n5JTWQKS7Yb0ZdbC9XWipQCJvuf6zkvKjRpvbmw=');
define('AUTH_SALT',        'iqWZ1_71iacdOHz3Uxk9Tm2S7h7uAB-TIlFdr7JkM4E=');
define('SECURE_AUTH_SALT', 'jTJ0zlOxy-FKJ3oCLtJ-pDuuxIWE-QSFW4tTc5f7rXs=');
define('LOGGED_IN_SALT',   'qggaLvjNtFcSPKXNjPvCC9qAR756Yaix2PGnO4wN-wE=');
define('NONCE_SALT',       'HOyhogdHGYl-lMjTDAzcNFMwOB-b3sG41lPapH-OTw0=');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'www_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', 'en_GB');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/** 
 * Prevent file editing from WP admin.
 * Just set to false if you want to edit templates and plugins from WP admin.  
 */
define('DISALLOW_FILE_EDIT', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

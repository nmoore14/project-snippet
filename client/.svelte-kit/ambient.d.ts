
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DATABASE_URL: string;
	export const NVM_INC: string;
	export const STARSHIP_SHELL: string;
	export const MANPATH: string;
	export const NODE: string;
	export const NVM_CD_FLAGS: string;
	export const ASDF_DIR: string;
	export const SHELL: string;
	export const TERM: string;
	export const TMPDIR: string;
	export const WINDOWID: string;
	export const npm_config_local_prefix: string;
	export const HERD_PHP_83_INI_SCAN_DIR: string;
	export const PNPM_HOME: string;
	export const LMS_STUDIO_API_KEY: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const REACT_EDITOR: string;
	export const COMMAND_MODE: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const HERD_PHP_82_INI_SCAN_DIR: string;
	export const FZF_DEFAULT_OPTS: string;
	export const PATH: string;
	export const HERD_PHP_84_INI_SCAN_DIR: string;
	export const npm_package_json: string;
	export const _: string;
	export const LaunchInstanceID: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const FZF_ALT_C_COMMAND: string;
	export const npm_lifecycle_event: string;
	export const KITTY_PID: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const XPC_FLAGS: string;
	export const FZF_COMPLETION_OPTS: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const SHLVL: string;
	export const HOME: string;
	export const LMS_STUDIO_API_URL: string;
	export const TERMINFO: string;
	export const STARSHIP_SESSION_KEY: string;
	export const LOGNAME: string;
	export const FZF_CTRL_T_COMMAND: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const BUN_INSTALL: string;
	export const NVM_BIN: string;
	export const npm_config_user_agent: string;
	export const KITTY_WINDOW_ID: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const BAT_THEME: string;
	export const SECURITYSESSIONID: string;
	export const npm_node_execpath: string;
	export const KITTY_PUBLIC_KEY: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DATABASE_URL: string;
		NVM_INC: string;
		STARSHIP_SHELL: string;
		MANPATH: string;
		NODE: string;
		NVM_CD_FLAGS: string;
		ASDF_DIR: string;
		SHELL: string;
		TERM: string;
		TMPDIR: string;
		WINDOWID: string;
		npm_config_local_prefix: string;
		HERD_PHP_83_INI_SCAN_DIR: string;
		PNPM_HOME: string;
		LMS_STUDIO_API_KEY: string;
		NVM_DIR: string;
		USER: string;
		REACT_EDITOR: string;
		COMMAND_MODE: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		HERD_PHP_82_INI_SCAN_DIR: string;
		FZF_DEFAULT_OPTS: string;
		PATH: string;
		HERD_PHP_84_INI_SCAN_DIR: string;
		npm_package_json: string;
		_: string;
		LaunchInstanceID: string;
		__CFBundleIdentifier: string;
		PWD: string;
		FZF_ALT_C_COMMAND: string;
		npm_lifecycle_event: string;
		KITTY_PID: string;
		npm_package_name: string;
		LANG: string;
		XPC_FLAGS: string;
		FZF_COMPLETION_OPTS: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		SHLVL: string;
		HOME: string;
		LMS_STUDIO_API_URL: string;
		TERMINFO: string;
		STARSHIP_SESSION_KEY: string;
		LOGNAME: string;
		FZF_CTRL_T_COMMAND: string;
		FZF_DEFAULT_COMMAND: string;
		BUN_INSTALL: string;
		NVM_BIN: string;
		npm_config_user_agent: string;
		KITTY_WINDOW_ID: string;
		KITTY_INSTALLATION_DIR: string;
		BAT_THEME: string;
		SECURITYSESSIONID: string;
		npm_node_execpath: string;
		KITTY_PUBLIC_KEY: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
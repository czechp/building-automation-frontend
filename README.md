# Frontend app for building automation system by <i> PCz  </i>

## TODO:

### Layout:

#### TopBarLayout

- [x] component,
- [x] info about current logged user,

#### NavigationBarLayout

- [x] buttons,
- [x] routing for buttons (onClick),

#### Login screen:

- [x] page template,
- [x] text input component (with password possibility),
- [x] login screen,
- [x] authorize service,

### Guards

- [x] WarningPageCmp,
- [x] LoginRequirementPage,
- [x] login guard,

### Logout

- [x] authorization context,
- [x] logout component, clear credentials and navigate to login page

### Register

- [x] register page,
- [x] navigate to register page from login page,
- [x] display URL to account activation (only development mode)

### Accounts

- [x] admin guard,
- [x] access denied page,
- [x] account list page,
- [x] account details page,
- [x] delete account,
- [x] confirm by admin,

### Locations

- [x] page (routing to ""/locations"),
- [x] locations list and add,
- [x] location details and remove (in common page ""/location-details")

### Switch devices
- [x] all switch devices page ("/switch-devices"),
- [x] add new switch device on the page with list,
- [x] switch device details ("/switch-device-details"),
- [x] error statement ("/switch-device-details"),
- [x] remove switch device ("/switch-device-details"),
- [x] set new state for device ("/switch-device-details"),
- [x] list of switch device in location details,

### Events
- [x] event list page "/events",
- [x] tile in home page to events,
- [x] event details,
- [x] event list in switch device,
- [x] events for admin (possibility to remove event)

### Restore password
- [x] restore password demand page ("/restore-password-demand"),
- [x] apply restore password token ("/restore-password-token"),
- [x] navigate to restore password demand page from login page,
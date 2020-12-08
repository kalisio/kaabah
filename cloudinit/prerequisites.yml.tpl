groups:
    - docker

users:
    - name: ${user}
      groups: docker, adm
      lock_passwd: true
      sudo: 'ALL=(ALL) NOPASSWD: ALL'
      shell: /bin/bash
      ssh_authorized_keys:
        - '${ssh_pubkey}'

apt:
    preserve_sources_list: true
    sources:
        backports:
            source: "deb http://deb.debian.org/debian $RELEASE-backports main"
        # docker is now installed through runcmd since apt module often fails fetching repository gpg key
        # docker:
        #     source: "deb https://download.docker.com/linux/debian $RELEASE stable"
        #     keyid: 9DC858229FC7DD38854AE2D88D81803C0EBFCD88

packages:
    - fail2ban
    - glusterfs-server
    - rclone
    - jq
    - rsync
    - tmux
    - htop
    - curl
    - gnupg
    # see comment in apt module wrt. docker
    # - [docker-ce, "${docker_version}"]

runcmd:
    # Install docker: see comment in apt module wrt. docker
    - 'curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -'
    - 'echo "deb https://download.docker.com/linux/debian $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list'
    - [ apt-get, update, -y]
    - [ apt-get, install, -y, "docker-ce=${docker_version}"]
    # Install nvm for ${user}
    - 'curl -L -o- https://raw.githubusercontent.com/nvm-sh/nvm/${nvm_version}/install.sh | sudo -i -u ${user} bash'
    # Install yq globally
    - 'curl -L -o /usr/local/bin/yq https://github.com/mikefarah/yq/releases/download/${yq_version}/yq_linux_amd64'
    - 'chmod +x /usr/local/bin/yq'
